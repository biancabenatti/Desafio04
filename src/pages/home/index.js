import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim()) {
      navigate(`/profile/${username}`);
    } else {
        alert("O campo de busca esta vazio, inclua um nome de usuário e clique em buscar!")
    }
  };

  return (
    <div className="container">
      <div className="search-box">
        <h1>Search Devs</h1>
        <input
          type="text"
          placeholder="Type the username here..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Home;
