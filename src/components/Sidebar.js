import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#508C9B', padding: '20px',paddingBottom:'0px', height: '100vh', position: 'fixed' ,color:'white'}}>
       
      <img className='logo-img' src="https://res.cloudinary.com/drzlum1yv/image/upload/v1723350002/buzznet-high-resolution-logo-black-transparent_h6uqx0.png" alt="logo" />
      <h4><i className="fi fi-bs-admin-alt mr-2"></i>Admin Dashboard</h4>



      
    
      <ul className='sidebar-list' style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link style={{color:'white',textDecoration:'none'}} to="/"><i className="fi fi-bs-house-chimney"></i>Home</Link></li>
        <li><Link  style={{color:'white',textDecoration:'none'}} to="/users"><i className="fi fi-bs-circle-user m-0"></i>Users</Link></li>
        <li><Link  style={{color:'white',textDecoration:'none'}} to="/posts"><i className="fi fi-bs-blog-text m-0"></i>Posts</Link></li>
      </ul>
      <div className='down-cont'>
        <p><i className="fi fi-bs-portrait"></i></p>
        <h4>Viswas<br/><span>admin@BuzzNet</span></h4>
      </div>
     
    </div>
  );
};

export default Sidebar;
