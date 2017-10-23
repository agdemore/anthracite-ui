import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// import DropDownCardsItem from "./DropDownCardsItem";

const CardsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
  
  & .card {
    height: 60px
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    cursor: pointer;
    padding: 12px;
    background-color: transparent;
    position: relative;
  }
  
  & .main-card {
    z-index: 5;
    background-color: #fff;
    transition-property: margin-bottom, height;
    transition: .3s ease-in-out;
  }
  
  & .other-card {
    // margin-bottom: -74px;
    z-index: 2
    transition-property: margin-bottom, height;
    transition: .3s ease-in-out;
  }
  & .other-card:nth-last-child(1) {
    margin-bottom: 0px !important;
  }
`;

export default class DropDownCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleOpenCards = this.openCards.bind(this);
  }

  componentDidMount() {

  }

  openCards() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const resultChildren = React.Children.map(this.props.children, (child, i) => {

      return React.cloneElement(child, {
        parentIsOpen: this.state.isOpen
      });
    });

    const divStl = {
      marginBottom: this.state.isOpen? '10px' : '-74px'
    };

    return (
      <CardsWrapper>
        <div className="cards-wrapper">
          <div className='card main-card' style={divStl} onClick={this.handleOpenCards}>
            { this.state.isOpen ? 'open' : 'close' }
          </div>
          {resultChildren}
        </div>
      </CardsWrapper>
    );
  }
}

DropDownCards.propTypes = {

};