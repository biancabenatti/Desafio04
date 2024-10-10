export const checkRepositoryExists = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const repos = await response.json();
      return repos.length > 0; 
    } catch (error) {
      console.error("Erro ao verificar repositórios:", error);
      return false; 
    }
  };