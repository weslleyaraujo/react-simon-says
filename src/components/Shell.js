import React from 'react';
import { Flex, Box } from 'reflexbox';

const Shell = ({ children, style }) => (
  <Flex align="center" justify="center" style={{ width: '100%', height: '100%', ...style }} >
    <Box>{children}</Box>
  </Flex>
);

export default Shell;
