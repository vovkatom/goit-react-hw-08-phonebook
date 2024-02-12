import styled from '@emotion/styled';

export const Container = styled.div`
  width: 270px;
  margin: 20px auto;
  padding: 10px 20px;

  font-size: 20px;
  font-weight: 500;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2),
    2px 2px 2px 1px rgba(0, 0, 0, 0.4), 3px 3px 3px 2px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;
