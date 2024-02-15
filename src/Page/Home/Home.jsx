import React from 'react';
import { HomeBox, HomeDescr, HomeImg } from './Home.styled';
import Phonbook from '../../Utills/Phonbook.png';

const Home = () => {
  return (
    <HomeBox>
      <HomeImg src={Phonbook} alt='img' />
      <HomeDescr>
        I offer a program to store your phone numbers contacts. More of my works
        at GitHub:
        <a target='blank' href='https://github.com/Vovkatom'>
          <span style={{ color: 'blue' }}>Vladimir Bogachuck</span>
        </a>
      </HomeDescr>
    </HomeBox>
  );
};

export default Home;
