'use client'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './../globals.css';

const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 5px;
`;

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <Loader>
          <p>Loading...</p>
        </Loader>
      )}
    </>
  );
};

export default Preloader;
