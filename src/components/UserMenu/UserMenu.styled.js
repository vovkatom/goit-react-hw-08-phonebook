import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const UserMenuButton = styled(Button)`
  margin-right: 10px;
  font-size: 10px;
  width: 40px;
  height: 20px;
  text-align: center;
  background-color: green;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 10px;
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 140px;
  }
`;
export const UserMenuDescr = styled(Typography)`
  flex-grow: 1;
  color: #006400;
  font-weight: 500;
  font-size: 10px;
  text-align: center;
  display: none;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    display: block;
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    display: block;
  }
`;
export const UserMenuBox = styled(Box)`
  text-align: center;
  padding: 5px;
`;
