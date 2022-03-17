import { useEffect, useState } from 'react';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users when components load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return <div>UserResults</div>;
}

export default UserResults;
