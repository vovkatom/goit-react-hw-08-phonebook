import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const HomeBox = styled(Box)`
  padding: 15px;
  margin-top: 20px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;
  }
`;
export const HomeDescr = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  margin-top: 15px;
  padding: 0 15px;

  @media screen and (min-width: 500px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    margin-left: 5px;
    color: #006400;
    cursor: pointer;
    @media screen and (min-width: 500px) {
      font-size: 20px;
    }
    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }
`;

export const HomeImg = styled.img`
  display: block;
  width: 150px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 300px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-right: 20px;
  }
`;
