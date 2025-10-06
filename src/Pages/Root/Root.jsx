import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Container from '../../Components/Container/Container';

const Root = () => {
  return (
    <>
      <Container>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </Container>
    </>
  );
};

export default Root;