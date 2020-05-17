import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import bkgSignUp from '../../assets/signUp-bkg.png';

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
`;

const AnimatedFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${AnimatedFromLeft} 2s;

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
  background-image: url(${bkgSignUp});
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
`;
