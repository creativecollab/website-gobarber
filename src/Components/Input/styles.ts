import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: #232129;
  padding: 15px;

  color: #666360;
  border: 2px solid #232129;

  border-radius: 10px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;
    background-color: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 15px;
  }
`;

export const MSGError = styled(Tooltip)`
  height: 30px;
  margin-left: 15px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c52020;
    color: #fff;

    &::before {
      border-color: #c52020 transparent;
    }
  }
`;
