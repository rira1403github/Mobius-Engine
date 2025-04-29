import React from "react";

const ProgressBar = ({ value, maxValue, color }) => {
  // Calculate the percentage completion
  const percentage = (value / maxValue) * 100;

  return (
    <div style={{ position: 'relative', width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${percentage}%`,
        height: '100%',
        backgroundColor: color || '#4caf50',
        transition: 'width 0.3s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      {`${Math.round(percentage)}%`}
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '0 5px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#333',
      }}
    >
    </div>
  </div>
  );
};

export default ProgressBar;