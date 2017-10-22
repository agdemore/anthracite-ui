import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// import DropDownCardsItem from "./DropDownCardsItem";

const CardsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  
  & .card {
    width: 300px;
    height: 60px
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    margin-bottom: 2px;
    cursor: pointer;
    padding: 12px;
    z-index: 100;
    background-color: #fff;
  }
  
  & .main-card {
     margin-bottom: 5px;
  }
`;

export default class DropDownCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleOpenCards = this.openCards.bind(this);
    // this.modifyChildren = this.modifyChildren.bind(this);
  }

  componentDidMount() {
    // React.Children.map(this.props.children, (child, i) => {
    //   console.log(i, child.props.title);
    // });
  }

  openCards() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {

    const resultChildren = React.Children.map(this.props.children, (child, i) => {
      let offset = 84 * (i + 1);

      return React.cloneElement(child, {
        offset: offset,
        parentIsOpen: this.state.isOpen
      });
    });

    return (
      <CardsWrapper>
        <div className="main-card card" onClick={this.handleOpenCards}>
          { this.state.isOpen ? 'open' : 'close' }
        </div>
        {resultChildren}
      </CardsWrapper>
    );
  }
}

DropDownCards.propTypes = {

};