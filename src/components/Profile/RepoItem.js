import React from 'react';
import { timeAgo } from '../../utils/timeUtils'; // Importando a função

const RepoItem = ({ repo }) => {
  return (
    <li>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
      <div className="repo-details">
        <p>{repo.description || 'Sem descrição'}</p>
        <span className="repo-stars">🌟 {repo.stargazers_count}</span>
        <span className="repo-updated">Update {timeAgo(repo.updated_at)}</span>
      </div>
    </li>
  );
};

export default RepoItem;
