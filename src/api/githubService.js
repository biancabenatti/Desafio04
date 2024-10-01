const BASE_URL = 'https://api.github.com/users';

export const getUserData = async (username) => {
  const response = await fetch(`${BASE_URL}/${username}`);
  if (!response.ok) {
    throw new Error('Usuário não encontrado');
  }
  return response.json();
};

export const getUserRepos = async (username) => {
  const response = await fetch(`${BASE_URL}/${username}/repos`);
  if (!response.ok) {
    throw new Error('Erro ao buscar repositórios');
  }
  return response.json();
};