import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    width: 140px;
    padding: 8px;
    background-color: #ff9000;
    font-size: 1em;
    font-weight: 500;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 2s;
    visibility: hidden;

    position: absolute;
    left: 50%;
    bottom: calc(100% + 12px);
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
