import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

  const booksData = useLoaderData();

  return (
    <main>
      <Hero></Hero>
      <Books booksData={booksData}></Books>
    </main>
  );
};

export default Home;