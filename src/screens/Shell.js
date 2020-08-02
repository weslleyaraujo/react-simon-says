import React, { Component } from "react";
import { Flex, Box } from "reflexbox";

import { GoOctoface } from "react-icons/go";
import { REPO_URL } from "../constants";
import Header from "../components/Header";
import { connect } from "react-redux";

export class Shell extends Component {
  render() {
    const { highscore, style, children } = this.props;
    return (
      <Flex
        align="center"
        justify="center"
        style={{ width: "100%", height: "100%", ...style }}
      >
        <Header p={2} justify="space-between" flex>
          <Box>
            HIGH SCORE: {highscore} <br />
          </Box>
          <Box>
            <a href={REPO_URL} target="_blank">
              <GoOctoface size={40} color={"white"} />
            </a>
          </Box>
        </Header>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
          height="100%"
        >
          {children}
        </Box>
      </Flex>
    );
  }
}

export default connect(({ game }) => game)(Shell);
