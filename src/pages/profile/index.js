import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserData, getUserRepos } from '../../api/githubService';  

const Profile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData(username);
        const repositories = await getUserRepos(username);
        setUserData(user); //Atualiza o estado userData com os dados do usuário.
        setRepos(repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)); //Atualiza o estado repos com a lista de repositórios, ordenando-os pela quantidade de estrelas em ordem decrescente.
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [username]); // O array de dependências [username] significa que o efeito será executado sempre que o username mudar.

  if (!userData) {
    return <div>Carregando...</div>; // Esta parte do código verifica se userData ainda é null. Se for, isso significa que os dados do usuário ainda estão sendo carregados. Portanto, a aplicação exibe uma mensagem "Carregando...".
  }

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000); // converter em segundos
    let interval = Math.floor(seconds / 31536000); // Um ano tem aproximadamente 31.536.000 segundos (365 dias).
    if (interval > 1) return `${interval} years ago`;

    interval = Math.floor(seconds / 2592000); // meses
    if (interval > 1) return `${interval} months ago`;

    interval = Math.floor(seconds / 86400); // dias
    if (interval > 1) return `${interval} days ago`;

    interval = Math.floor(seconds / 3600); // horas
    if (interval > 1) return `${interval} hours ago`;

    interval = Math.floor(seconds / 60); // minutos
    if (interval > 1) return `${interval} minutes ago`;

    return 'just now';
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <img src={userData.avatar_url} alt={userData.name} />
        <h2>{userData.login}</h2> 
        {userData.bio && <p>{userData.bio}</p>} 
        
        <div className="stats">
          <span>⭐ {userData.public_repos} repositórios</span>
          <span>👥 {userData.followers} seguidores</span>
          <span>🔗 {userData.following} seguindo</span>
        </div>
        
        <div className="additional-info">
          <p><strong>Organização:</strong> {userData.company || 'N/A'}</p>
          <p><strong>Localização:</strong> {userData.location || 'N/A'}</p>
          <p><strong>Email:</strong> {userData.email || 'N/A'}</p>
          {userData.blog && <p><strong>Website:</strong> <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog}</a></p>}
          {userData.twitter_username && (
              <p>
              <strong>Twitter:</strong> 
              <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noopener noreferrer">
                @{userData.twitter_username}
              </a>
            </p>
          )}
          <Link to="/" className="back-button">Voltar</Link>
        </div>
      </div>
      <div className="profile-content">
        <h2>Repositórios Públicos</h2>
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              <div className="repo-details">
                <p>{repo.description || 'Sem descrição'}</p>
                <span className="repo-stars">🌟 {repo.stargazers_count}</span>
                <span className="repo-updated">Update {timeAgo(repo.updated_at)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

