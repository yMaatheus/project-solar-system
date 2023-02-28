import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Headline = styled.h2`
  text-align: center;
  padding: 1.5rem 0;

  font-weight: 300;
  font-size: 40px;
  line-height: 150%;

  text-align: center;
  text-transform: uppercase;
`;

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <Headline>{headline}</Headline>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
