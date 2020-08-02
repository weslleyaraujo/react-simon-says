import React, { Component } from "react";
import audios from "../audios";
import { connect } from "react-redux";

export class Player extends Component {
  componentDidUpdate() {
    const { active } = this.props;
    const player = this.refs[active];
    if (!player) {
      return;
    }
    player.currentTime = 0;
    player.play();
  }

  render() {
    return (
      <div>
        {Object.keys(audios).map((id, key) => (
          <audio ref={id} preload="auto" src={audios[id]} key={key}></audio>
        ))}
      </div>
    );
  }
}

export default connect(({ pads, game }) => {
  const active = pads.find(({ active }) => active);
  return {
    active: active ? active.id : null,
  };
})(Player);
