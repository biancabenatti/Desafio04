import React from 'react';
import { timeAgo } from '../../utils/timeUtils'; 
import { FaRegStar } from "react-icons/fa";
import { TbPoint } from "react-icons/tb";

const RepoItem = ({ repo }) => {
  return (
    <li className="bg-white mb-4 p-4 rounded-lg shadow flex flex-col justify-start">
      <a className="text-[#242424] no-underline font-bold text-[1.4rem] hover:underline " href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
      <div className="repo-details">
        <p>{repo.description || 'Sem descrição'}</p>
        <span className="repo-stars"><FaRegStar/>{repo.stargazers_count}<TbPoint /></span>
        <span className="repo-updated">Update {timeAgo(repo.updated_at)}</span>
      </div>
    </li>
  );
};

export default RepoItem;
