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
`;

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { theme } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CardWrapper>
          <div className="card-title">{ this.props.title }</div>
          <div className="card-subtitle">{ this.props.subTitle }</div>
        </CardWrapper>
      </ThemeProvider>
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
  theme: PropTypes.object
};

CardItem.defaultProps = {
  title: 'Title',
  theme: {
    width: '300px',
    height: '60px'
  }
};


// CardItem.displayName = 'ddCardsItem';

export default CardItem;