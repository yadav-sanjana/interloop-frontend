'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import './../globals.css'

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loader for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a certain delay (you can replace this with your actual data fetching logic)
    }, 2000); // Change this delay as per your requirement or remove this in real usage

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <div className='loader'>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Preloader;
