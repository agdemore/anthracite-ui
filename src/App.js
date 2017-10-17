import React from "react"

import Button from "./Button/Button";
import TagCloud from "./TagCloud/TagCloud";
import DropDownCards from "./DropDownCards/DropDownCards";
import CardItem from "./DropDownCards/DropDownCardsItem";


const cardTheme = {
  'background-color': 'black'
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
          {/*<CardItem value='a'/>*/}
          {/*<CardItem value='b'/>*/}
          {/*<CardItem value='c'/>*/}
        </DropDownCards>

        <CardItem title='Card Example'
                  subTitle='Some card component example'
        />
      </div>
    )
  }
}