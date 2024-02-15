import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Box = styled.ul`
  width: 100%;
  border-top: 2px solid #006400;
  margin: 20px auto;
  padding: 5px;
  list-style: none;
  font-size: 18px;
  align-items: center;
`;
export const List = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`;
export const ContactName = styled.span`
  min-width: 30%;
  margin-right: 10px;
  font-size: 13px;
  color: #8b4513;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 180px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    font-size: 18px;
  }
`;
export const ContactNumber = styled.span`
  min-width: 30%;
  margin-right: 10px;
  color: #2d2d2d;
  font-size: 13px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 160px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    font-size: 18px;
  }
`;
export const Btn = styled(Button)`
  width: 30%;
  font-size: 11px;
  background-color: transparent;
  /* fillColor: red; */
  color: red;

  @media screen and (min-width: 480px) {
    width: 25%;
    font-size: 14px;
  }
`;
