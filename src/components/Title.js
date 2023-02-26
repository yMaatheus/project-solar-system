import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleStyle = styled.h2`
  text-align: center;
  margin: 3.5rem 0;
  
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 150%;
`;

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <TitleStyle>{headline}</TitleStyle>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
