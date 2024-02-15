import styled from '@emotion/styled';
import { AppBar, Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  color: #006400;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-right: 10px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const HeaderBox = styled(Box)`
  flex-grow: 1;
`;

export const HeaderNav = styled(AppBar)`
  color: '#5abbed';
  background-color: #fff;
`;

export const HeaderButton = styled(Button)`
  margin-right: 10px;
  font-size: 10px;
  width: 55px;
  background-color: green;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 13px;
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 140px;
  }
`;

export const ButtonNav = styled(Button)`
  padding: 5px;
  min-width: 50px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 13px;
    min-width: 80px;
  }
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: #1976d2;
  font-size: 10px;
  font-weight: 700;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &.active {
    color: #006400;
  }
`;
export const LinkHeader = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  padding: 0 8px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 13px;
    padding: 0 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 0 25px;
  }
  &.active {
    color: #00ff00;
  }
`;
