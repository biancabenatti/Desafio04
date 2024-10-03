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
        if (Array.isArray(repos)) {
          const stars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
          setTotalStars(stars);
        }
      } catch (error) {
        console.error("Erro ao buscar os repositórios:", error);
      }
    };

    fetchTotalStars();
  }, [username]);

  return (
    <div className="w-1/3 text-white p-5 flex flex-col items-center backdrop-blur-3xl rounded-r-xl  border-r-gray-700 border-r-2 ">
      <img className="w-64 h-64 mb-12 mt-10 rounded-lg" src={userData.avatar_url} alt={userData.name} />
      <h2 className="mb-2.5 text-3xl">{userData.name}</h2>
      <h3>{`@${username}`}</h3>
      {userData.bio && <p>{userData.bio}</p>}
      <div class="flex-grow">
        <div className="flex gap-4 mt-8">
          <span className="flex gap-2 items-center"><IoPeopleOutline /> {userData.followers} followers</span>
          <span className="flex gap-2 items-center"><FaRegHeart /> {userData.following} following</span>
          <span className="flex gap-2 items-center"><FaRegStar />{totalStars} stars</span>
        </div>
        <div className="mt-5">
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
        </div>
          <Link to="/" className="flex justify-center items-center p-1 h-12 w-full md:w-36 bg-gray-950 text-white rounded-lg cursor-pointer text-lg hover:bg-gray-900">Voltar</Link>
      </div>
    </div>
  );
};

export default ProfileSidebar;