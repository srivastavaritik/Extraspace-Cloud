import React from 'react';
import './css/NotFound.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="blur-bg" />
      <div className="content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
