export const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;
    
    interval = Math.floor(seconds / 2592000); // meses
    if (interval > 1) return `${interval} months ago`;
  
    interval = Math.floor(seconds / 86400); // dias
    if (interval > 1) return `${interval} days ago`;
  
    interval = Math.floor(seconds / 3600); // horas
    if (interval > 1) return `${interval} hours ago`;
  
    interval = Math.floor(seconds / 60); // minutos
    if (interval > 1) return `${interval} minutes ago`;
  
    return 'just now';
  };
  