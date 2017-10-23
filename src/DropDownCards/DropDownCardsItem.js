import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  padding: 12px;
  z-index: 50;
  margin-bottom: -80px;
  transition-property: margin-bottom, height;
  transition: .3s ease-in-out;
`;

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { theme } = this.props;

    const transformStyle = {
      marginBottom: this.props.parentIsOpen ? '10px' : '-74px'
    };

    return (
      <div className='card other-card' style={transformStyle}>
      {/*<ThemeProvider theme={theme}>*/}
        {/*<CardWrapper style={transformStyle}>*/}
          <div className="card-title">{ this.props.title }</div>
          <div className="card-subtitle">{ this.props.subTitle }</div>
          <span>{ this.props.offset }</span>
      {/*   </CardWrapper>*/}
      {/* </ThemeProvider>*/}
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  actionButton: PropTypes.node,
  cancelButton: PropTypes.node,
  onActionButtonClick: PropTypes.func,
  onCancelButtonClick: PropTypes.func,
  theme: PropTypes.object,
  // indexInList: PropTypes.number.isRequired,
  parentIsOpen: PropTypes.bool.isRequired
};

CardItem.defaultProps = {
  title: 'Title',
  parentIsOpen: false,
  theme: {
    // width: '300px',
    height: '60px'
  }
};


// CardItem.displayName = 'ddCardsItem';

export default CardItem;