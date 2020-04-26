import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: #ff9000;
  border: 0;
  border-radius: 10px;
  font-weight: 500;
  color: #312e38;
  transition: background-color 0.2s;
  margin-top: 15px;
  &:hover {
    background-color: ${shade(0.2, '#FF9000')};
  }
`;
