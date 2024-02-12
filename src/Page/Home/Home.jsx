import React from 'react';
import { HomeBox, HomeDescr, HomeImg } from './Home.styled';
import Phonbook from '../../Utills/Phonbook.jpg';

const Home = () => {
  return (
    <HomeBox>
      <HomeImg src={Phonbook} alt='img' />
      <HomeDescr>
        I offer a program to store your phone numbers contacts More of my works
        at GitHub:
        <a target='blank' href='https://github.com/Vovkatom'>
          Vladimir Bogachuck
        </a>
      </HomeDescr>
    </HomeBox>
  );
};

export default Home;
