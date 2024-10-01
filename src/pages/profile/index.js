import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData, getUserRepos } from '../api/githubService';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileContent from '../components/Profile/ProfileContent';

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
    return <div>Carregando...</div>;
  }

  return (
    <div className="profile-container">
      <ProfileSidebar userData={userData} />
      <ProfileContent repos={repos} />
    </div>
  );
};

export default Profile;
