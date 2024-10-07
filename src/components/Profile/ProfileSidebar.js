import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoLocationOutline, IoPeopleOutline } from 'react-icons/io5';
import { GoOrganization } from "react-icons/go";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { BsTwitterX } from 'react-icons/bs';

const ProfileSidebar = ({ userData, username }) => {
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const fetchTotalStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();
        if (Array.isArray(repos)) {
          let stars = 0;
          for (let i = 0; i < repos.length; i++) {
            stars += repos[i].stargazers_count || 0;
          }
          setTotalStars(stars);
        }
      } catch (error) {
        console.error("Erro ao buscar os repositórios:", error);
      }
    };
    fetchTotalStars();
  }, [username]);

  return (
    <div className="bg-[#262829] h-full w-full md:w-full text-slate-100 p-4 flex flex-col items-center border-r-gray-700 text-lg">
      <img className="w-32 h-32 md:w-48 md:h-48 mb-4 mt-10 rounded-lg" src={userData.avatar_url} alt={userData.name} />
      <h2 className="mb-8 text-xl md:text-4xl mt-6 font-bold">{userData.name}</h2>
      <h3 className="font-light">{`@${username}`}</h3>
      {userData.bio && <p className="font-light text-center md:text-left">{userData.bio}</p>}
      <div className="flex-grow font-light">
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          <span className="flex gap-2 items-center"><IoPeopleOutline /> {userData.followers} followers</span>
          <span className="flex gap-2 items-center"><FaRegHeart /> {userData.following} following</span>
          <span className="flex gap-2 items-center"><FaRegStar /> {totalStars} stars</span>
        </div>
        <div className="mt-5 font-light md:text-left">
          <p class="flex gap-2"><strong class="flex gap-2 items-center"><GoOrganization />Organização:</strong> {userData.company || 'N/A'}</p>
          <p class="flex gap-2"><strong class="flex gap-2 items-center">< IoLocationOutline />Localização:</strong> {userData.location || 'N/A'}</p>
          <p class="flex gap-2"><strong class="flex gap-2 items-center"><MdOutlineAlternateEmail />Email:</strong> {userData.email || 'N/A'}</p>
          {userData.blog && (
            <p class="flex gap-2">
              <strong class="flex gap-2 items-center"><CgWebsite />Website: </strong>
              <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog}</a>
            </p>
          )}
          {userData.twitter_username && (
            <p class="flex gap-2">
              <strong class="flex gap-2 items-center"><BsTwitterX />Twitter:</strong>
              <a href={userData.twitter_username} target="_blank" rel="noopener noreferrer">@{userData.twitter_username}</a>
            </p>
          )}
        </div>
      </div>
      <Link to="/" className="flex justify-center items-center p-2 h-12 w-full mt-4 md:w-36 bg-gray-950 text-slate-100 rounded-lg cursor-pointer text-lg hover:bg-gray-900">Voltar</Link>
    </div>
  )
};

export default ProfileSidebar;