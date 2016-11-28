import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Headline = styled.h1`
  color: #FFF;
  font-size: 5em;
`;

const colorify = (colors, word) => {
  const list = Object.keys(colors);
  const size = list.length - 1;

  const incrementalSelector = list => {
    let marker = 0;
    return () => {
      if (list[marker]) {
        const color = list[marker];
        marker++;
        return color;
      }

      marker = 1;
      return list[0];
    }
  }

  const select = incrementalSelector(list);

  return (
    <span>
      {word.split('').map((l, i) => (
        <span key={i} style={{ color: colors[select()] }}>{l}</span>
      ))}
    </span>
  );
}

const Title = ({ value }) =>
  (<Headline>{colorify(colors, value)}</Headline>);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
