import React from 'react';
import RepoItem from './RepoItem';

const ProfileContent = ({ repos }) => {
  return (
    <div className="profile-content">
      <h2>Repositórios Públicos</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
};

export default ProfileContent;
