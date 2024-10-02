import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim()) {
      navigate(`/profile/${username}`);
    } else {
      alert("O campo de busca está vazio, inclua um nome de usuário e clique em buscar!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover">
      <div className="text-center p-16 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-lg">
        <h1 className="mb-5 text-3xl text-aliceblue">Search Devs</h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Type the username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-72 p-5 border border-gray-300 rounded-lg font-roboto-condensed mr-2"
          />
          <button
            onClick={handleSearch}
            className="p-5 bg-gray-800 text-white rounded-lg cursor-pointer font-roboto-condensed text-lg hover:bg-gray-900"
          >
            <FaSearch className="mr-2" /> Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
