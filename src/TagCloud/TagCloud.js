import React from 'react'
import PropTypes from 'prop-types'
import { css } from "emotion";
import styled from "react-emotion";

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 10px 20px;
  font-family: 'sans-serif';
  
  & .tag-cloud-title {
    font-weight: 600;
  }
  
  & .tag-cloud-input {
    outline: none;
    padding: 16px 0;
  }
`;

const ListWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;


export default class TagCloud extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchText: '',
      inputFocused: true,
      value: props.value
    }
  }

  render () {

    return (
      <Wrapper>
        <div className='tag-cloud-title'>{this.props.title}</div>
        <div contentEditable='true' className='tag-cloud-input'>
          {this.props.placeholder}
        </div>
        <ListWrapper>
          {this.props.children}
        </ListWrapper>
      </Wrapper>
    )
  }
}

TagCloud.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.element)
};

TagCloud.defaultProps = {
  value: '',
  title: 'Add tag',
  placeholder: "Search..."
};