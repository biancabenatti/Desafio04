import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoPeopleOutline } from 'react-icons/io5';

const ProfileSidebar = ({ userData, username }) => {
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const fetchTotalStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();
        const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        setTotalStars(stars);
      } catch (error) {
        console.error("Erro ao buscar os repositórios:", error);
      }
    };

    fetchTotalStars();
  }, [username]);

  return (
    <div className="profile-sidebar">
      <img src={userData.avatar_url} alt={userData.name} />
      <h2>{userData.name}</h2>
      <h3>{`@${username}`}</h3>
      {userData.bio && <p>{userData.bio}</p>}
      <div className="stats">
        <span><FaRegStar/>{totalStars}stars</span>
        <span><IoPeopleOutline /> {userData.followers}followers</span>
        <span><FaRegHeart /> {userData.following}following</span>
      </div>
      <div className="additional-info">
        <p><strong>Organização:</strong> {userData.company || 'N/A'}</p>
        <p><strong>Localização:</strong> {userData.location || 'N/A'}</p>
        <p><strong>Email:</strong> {userData.email || 'N/A'}</p>
        {userData.blog && (
          <p>
            <strong>Website:</strong> 
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog}</a>
          </p>
        )}
        {userData.linkedin && (
          <p>
            <strong>LinkedIn:</strong> 
            <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">{userData.linkedin}</a>
          </p>
        )}
        <Link to="/" className="back-button">Voltar</Link>
      </div>
    </div>
  );
};

export default ProfileSidebar;