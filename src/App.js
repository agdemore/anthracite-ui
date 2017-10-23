import React from "react"

import Button from "./Button/Button";
import TagCloud from "./TagCloud/TagCloud";
import DropDownCards from "./DropDownCards/DropDownCards";
import CardItem from "./DropDownCards/DropDownCardsItem";


const cardTheme = {
  backgroundColor: 'black',
  width: '100%',
  height: '100px'
};

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

        <DropDownCards>
          <CardItem title='a'/>
          <CardItem title='b'/>
          <CardItem title='c'/>
        </DropDownCards>

        <DropDownCards>
          <CardItem title='1'/>
          <CardItem title='2'/>
          <CardItem title='3'/>
        </DropDownCards>

        <div style={cardTheme}></div>
      </div>
    )
  }
}