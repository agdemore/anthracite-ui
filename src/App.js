import React from "react"

import Button from "./Button/Button";
import TagCloud from "./TagCloud/TagCloud";

export default class App extends React.Component {


  render () {
    return (
      <div>
        <Button title="hello"/>
        <TagCloud>
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </TagCloud>
      </div>
    )
  }
}