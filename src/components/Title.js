import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Headline = styled.h1`
  color: #FFF;
  font-size: 5em;
  text-align: center;
`;

const colorify = ({ colors, value }) => {
  const list = Object.keys(colors);
  const size = list.length - 1;
  const letters = [...Array(Math.floor(value.length / size))]
    .reduce((acc, n) => [...acc, ...list], [])
    .concat(list.slice(0, list.length % size))
    .map(x => colors[x])
    .map((color, i) => (
      <span key={i} style={{ color }}>{value[i]}</span>
    ));

  return (
    <span>{letters}</span>
  );
}

const Title = ({ value }) =>
  (<Headline>{colorify({ colors, value })}</Headline>);

Title.propTypes = {
  value: PropTypes.any.isRequired,
};

export default Title;
