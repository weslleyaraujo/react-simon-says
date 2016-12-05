import styled from 'styled-components';
import { Link } from 'react-router';

const styles = `
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  color: white;
  background-color: transparent;
  font-family: 'Bungee', sans-serif;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Button = styled.button`${styles}`
export const ButtonLink = styled(Link)`${styles}`;
