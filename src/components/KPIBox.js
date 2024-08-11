import React from 'react';

const KPIBox = ({ title, count }) => {
  return (
    <div style={{ margin: '10px', padding: '20px', border: '1px solid #134B70', borderRadius: '5px', flex: 1 }}>
      <h2 style={{color:'#201E43',fontSize:'20px'}}>{title}</h2>
      <p style={{color:'#508C9B',fontWeight:'700',fontSize:'20px'}}>{count}</p>
    </div>
  );
};

export default KPIBox;
