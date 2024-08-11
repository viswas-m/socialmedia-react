import React, { useState, useEffect } from 'react';
import KPIBox from '../components/KPIBox';
import { fetchPosts } from '../dataService';

import './Posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [publishedPosts, setPublishedPosts] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setTotalPosts(data.length);
        setPublishedPosts(data.filter(post => post.published).length);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div style={{ padding: '20px', marginLeft: '220px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <KPIBox title="Total Posts" count={totalPosts} />
        <KPIBox title="Posts Published in Last 24 Hours" count={publishedPosts} />
      </div>
      <table className='post-table'>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Caption</th>
            <th>Media URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.caption}</td>
              <td><a href={post.mediaUrl} target="_blank" rel="noopener noreferrer">View Media</a></td>
              <td>
                <button className='delete-btn'>Delete</button>
                <button className='hide-btn'>Hide</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
