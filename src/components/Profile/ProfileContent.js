import React, { useEffect, useState } from 'react';
import RepoItem from './RepoItem';
import HamburgerMenu from '../../components/Menu/HamburgerMenu';

const ProfileContent = ({ repos }) => {
  const [sortedRepos, setSortedRepos] = useState(repos);
  const [filter, setFilter] = useState('stars-desc');

  useEffect(() => {
    const sortRepos = (repos) => {
      switch (filter) {
        case 'stars-asc':
          return [...repos].sort((a, b) => a.stargazers_count - b.stargazers_count);
        case 'stars-desc':
          return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
        case 'alphabetical':
          return [...repos].sort((a, b) => a.name.localeCompare(b.name));
        default:
          return repos;
      }
    };

    setSortedRepos(sortRepos(repos));
  }, [repos, filter]);

  return (
    <div className="flex-1 p-5 overflow-y-auto text-white ">
      <HamburgerMenu setFilter={setFilter} /> 
      <ul className="text-1xl font-light">
        {sortedRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
};

export default ProfileContent;
