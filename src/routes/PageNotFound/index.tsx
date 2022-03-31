import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoPageFound.scss';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-root">
      <div className="background-overlay">
        <h1 className=" enormous-404">404</h1>
      </div>
      <div className="not-found-content">
        <h2 className="oops-title">PAGE NOT FOUND!</h2>
        <p className="oops-description">The page either does not exist or is unaccessible.</p>
        <div className="action-container">
          <Button
            variant="contained"
            color="primary"
            className="theme-btn bg-blue"
            onClick={() => navigate('/')}
          >
            <KeyboardBackspace />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
