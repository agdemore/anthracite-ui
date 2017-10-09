import React from "react";
import { css } from "emotion";
import styled from "react-emotion";


export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "default"
    };
  }

  render() {
    return (
      <button className="default" onClick={() => alert("click")}>
        { this.props.title }
      </button>
    );
  }
}