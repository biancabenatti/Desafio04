import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Swal from 'sweetalert2'

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim()) {
      navigate(`/profile/${username}`);
    } else {
      Swal.fire({
        title: 'Atenção!',
        text: 'O campo de busca está vazio, inclua um nome de usuário e clique em buscar!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  };

  return (
    <div className="flex justify-center items-center bg-[url('/src/assets/home.jpg')] bg-cover bg-center h-screen font-thin text-2xl">
      <div className="text-center p-14 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-sm">
        <h1 className="mb-12 text-4xl text-white font-bold">Search Devs</h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Type the username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-80 p-2 border border-gray-300 rounded-lg mr-2 placeholder: flex text-lg"
          />
          <button
            onClick={handleSearch}
            className= "flex justify-center items-center p-1 h-12 w-36 bg-gray-800 text-white rounded-lg cursor-pointer text-lg hover:bg-gray-900"
          >
            <FaSearch className="mr-2" /> Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
