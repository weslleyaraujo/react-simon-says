import React from "react";
import { Flex } from "reflexbox";

import Title from "../components/Title";
import Shell from "./Shell";
import { ButtonLink } from "../components/Buttons";

const Welcome = () => (
  <Shell>
    <Title value="REACT SIMON" />
    <Flex justify="center">
      <ButtonLink to="/board">Play</ButtonLink>
    </Flex>
  </Shell>
);

export default Welcome;
