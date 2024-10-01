import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSidebar = ({ userData }) => {
  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;
    return 'just now';
  };

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
