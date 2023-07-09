import { useState, useEffect } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  console.log(moviesURL, apiKey);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

 