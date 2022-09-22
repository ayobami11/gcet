import { useState } from 'react';

import styled from 'styled-components';

import Navbar from '../Navbar';
import HeroCarousel from '../home/HeroCarousel';
import CallDialog from '../home/CallDialog';

const Main = styled.main`
    margin-top: 7.5em;
`;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <Main>
        <HeroCarousel openModal={openModal} />
        <CallDialog isModalOpen={isModalOpen} closeModal={closeModal} />
      </Main>
    </>
  )
}

export default Home