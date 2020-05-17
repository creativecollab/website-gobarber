import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypes = {
  info: css`
    background-color: #e8bfff;
    color: #3172b7;
  `,

  success: css`
    background-color: #e8bfff;
    color: #3172b7;
  `,

  error: css`
    background-color: #e8bfff;
    color: #3172b7;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  width: 360px;
  padding-top: 16px;
  padding-right: 30px;
  padding-bottom: 16px;
  padding-left: 16px;
  position: relative;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  ${props => toastTypes[props.type || 'info']}

  & + div {
    margin-top: 10px;
  }

  > svg {
    margin-top: 4px;
    margin-right: 12px;
    margin-bottom: 0;
    margin-left: 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 16px;
      line-height: 20px;
    }
  }

  button {
    background: transparent;
    border: 0;
    position: absolute;

    top: 19px;
    right: 16px;

    color: inherit;
    opacity: 0.8;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
