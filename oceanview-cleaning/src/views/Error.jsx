import React from 'react';

function ErrorView({ message }) {
  return (
    <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
}

export default ErrorView;
