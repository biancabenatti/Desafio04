import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData, getUserRepos } from '../../api/githubService';
import ProfileSidebar from '../../components/Profile/ProfileSidebar';
import ProfileContent from '../../components/Profile/ProfileContent';

const Profile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData(username);
        const repositories = await getUserRepos(username);
        setUserData(user);
        setRepos(repositories.sort((a, b) => b.stargazers_count - a.stargazers_count));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [username]);

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg font-semibold text-gray-700">Carregando...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row bg-[#353739] font-condensed md:h-screen">
    <div className="md:w-1/3 md:max-h-full">
      <ProfileSidebar userData={userData} username={username} />
    </div>
    <div className="flex-1 p-4 overflow-y-auto">
      <ProfileContent repos={repos} />
    </div>
  </div>
  );
};

export default Profile;
