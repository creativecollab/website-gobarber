import styled from 'styled-components';

export const Container = styled.div`
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
