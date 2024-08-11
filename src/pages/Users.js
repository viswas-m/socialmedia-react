import React, { useState, useEffect } from 'react';
import KPIBox from '../components/KPIBox';
import { fetchUsers } from '../dataService';

import './User.css'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setTotalUsers(data.length);
        setActiveUsers(data.filter(user => user.active).length);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div style={{ padding: '20px', marginLeft: '220px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <KPIBox title="Total Users" count={totalUsers} />
        <KPIBox title="Users Active in Last 24 Hours" count={activeUsers} />
      </div>
      <table className='user-table' >
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className='edit-btn'>Edit</button>
                <button className='ban-btn'>Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
