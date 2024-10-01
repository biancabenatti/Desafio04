import React from 'react';
import RepoItem from './RepoItem';

const ProfileContent = ({ repos }) => {
  const sortedRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <div className="profile-content">
      <h2>Repositórios Públicos</h2>
      <ul className="repo-list">
        {sortedRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
};

export default ProfileContent;

