import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CardsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  
  & .card {
    width: 300px;
    height: 60px
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    margin-bottom: 5px;
    cursor: pointer;
  }
  
  & .main-card {
     margin-bottom: 10px;
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

  openCards() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  // modifyChildren(child) {
  //   const className = classNames(
  //     child.props.className,
  //     {...otherClasses}
  //   );
  //
  //   const props = {
  //     className
  //   };
  //
  //   return React.cloneElement(child, props);
  // }

  render() {
    return (
      <CardsWrapper>
        <div className="main-card card" onClick={this.handleOpenCards}>
          { this.state.isOpen ? 'open' : 'close' }
        </div>
        <div className="card">
          a
        </div>
        <div className="card">
          b
        </div>
        <div className="card">
          c
        </div>
      </CardsWrapper>
    );
  }
}