import React from 'react';
import { timeAgo } from '../../utils/timeUtils'; 
import { FaRegStar } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  return (
    <li className="mb-4 p-4 rounded-lg flex flex-col justify-start backdrop-blur-3xl border-t-gray-700 border-t-2 shadow-2xl">
      <a className="text-slate-100 no-underline font-bold text-[1.4rem] hover:underline " href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
        <p>{repo.description || 'Sem descrição'}</p>
      <div className="flex gap-1 mt-5">
        <span className="flex gap-2 items-center"><FaRegStar/>{repo.stargazers_count} -</span>
        <span className="flex gap-2 items-center">Update {timeAgo(repo.updated_at)}</span>
      </div>
    </li>
  );
};

export default RepoItem;
