export const fetchUsers = async () => {
    const response = await fetch('/data/users.json');
    const data = await response.json();
    return data;
  };
  
  export const fetchPosts = async () => {
    const response = await fetch('/data/posts.json');
    const data = await response.json();
    return data;
  };
  