import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Swal from 'sweetalert2';

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
      });
    }
  };

  return (
    <div className="flex justify-center items-center bg-[url('/src/assets/home.jpg')] bg-cover bg-center h-screen font-thin text-2xl">
      <div className="text-center p-6 md:p-14 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-sm max-w-xs md:max-w-md lg:max-w-lg">
        <h1 className="mb-6 md:mb-12 text-2xl md:text-4xl text-white font-bold">Search Devs</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Type the username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full md:w-80 p-2 border border-gray-300 rounded-lg mb-4 md:mb-0 md:mr-2 placeholder: flex text-lg"
          />
          <button
            onClick={handleSearch}
            className="flex justify-center items-center p-1 h-12 w-full md:w-36 bg-gray-800 text-white rounded-lg cursor-pointer text-lg hover:bg-gray-900"
          >
            <FaSearch className="mr-2" /> Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* Mudanças para tornar o código responsivo:
No caso do md: significa que a regra será aplicada em telas de tamanho médio ou maior (768px ou mais).

Na linha que contém o input e o botão de busca, adicionei flex-col md:flex-row para que em telas menores (mobile), os elementos sejam exibidos um abaixo do outro, e em telas maiores (md para cima), eles fiquem lado a lado.

Ajustes de padding e margem:

O padding da div que envolve o conteúdo foi ajustado para p-6 md:p-14, onde em telas menores (mobile) ele usa um padding menor e em telas maiores ele expande.
Para o espaçamento entre o input e o botão, adicionei mb-4 md:mb-0 no input, para que em telas menores ele tenha uma margem inferior e em telas maiores a margem seja 0.*/