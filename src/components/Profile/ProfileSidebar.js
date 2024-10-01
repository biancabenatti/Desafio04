import React from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeUtils'; // Importando a função

const ProfileSidebar = ({ userData }) => {
  return (
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
  );
};

export default ProfileSidebar;
