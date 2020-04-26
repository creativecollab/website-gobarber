import styled from 'styled-components';
import { shade } from 'polished';
import bkgSignIn from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 45em;

  form {
    width: 25em;
    margin-top: 80px;
    margin-bottom: 80px;

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    a {
      margin-top: 20px;
      color: #f4ede8;
      display: block;
      text-decoration: none;
      transition: color 2s;
      text-align: center;

      &:hover {
        color: ${shade(0.2, '#F4ede8')};
      }
    }
  }

  > a {
    margin-top: 20px;
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 2s;
    text-align: center;
    font-weight: 500;
    font-size: 1.2em;
    display: flex;
    align-items: center;

    svg {
      margin-right: 20px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${bkgSignIn});
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
`;
