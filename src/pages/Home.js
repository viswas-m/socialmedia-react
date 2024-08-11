import React from 'react';
import KPIBox from '../components/KPIBox';
import './Home.css'

const Home = () => {
  // Dummy data for KPIs
  const totalUsers = 100;
  const totalPosts = 200;
  const activeUsers = 50;
  const postsLast24Hours = 20;

  return (
    <div style={{  marginLeft: '220px' ,backgroundColor:'white',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div style={{ display: 'flex', flexWrap: 'wrap',padding: '20px' }}>
        <KPIBox title="Total Users" count={totalUsers} />
        <KPIBox title="Total Posts" count={totalPosts} />
        <KPIBox title="Users Active in Last 24 Hours" count={activeUsers} />
        <KPIBox title="Posts Published in Last 24 Hours" count={postsLast24Hours} />
      </div>
      <h2 className='quote'>Social media is not a media.<br/> The key is to listen, engage, and build relationships.</h2>
      <img className='dash-img' src="https://res.cloudinary.com/drzlum1yv/image/upload/v1723353505/28694754_development_new_directions_16_jy0kwm.jpg" alt="dashboard-img"/>
    </div>
  );
};

export default Home;
