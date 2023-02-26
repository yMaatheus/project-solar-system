import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <S.PlanetCard data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <S.PlanetImg src={ planetImage } alt={ `Planeta ${planetName}` } />
      </S.PlanetCard>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
