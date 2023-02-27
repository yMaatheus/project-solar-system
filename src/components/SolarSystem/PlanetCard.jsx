import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { PlanetSizes } from '../../data/planets';

class PlanetCard extends React.Component {
  render() {
    const { size, planetName, planetImage } = this.props;
    const PlanetWidth = `${PlanetSizes[size].width}`;
    const PlanetHeight = `${PlanetSizes[size].height}`;
    return (
      <S.Card data-testid="planet-card">
        <S.ImageWrapper>
          <S.Image
            PlanetWidth={ PlanetWidth }
            PlanetHeight={ PlanetHeight }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </S.ImageWrapper>
        <S.PlanetName data-testid="planet-name">{planetName}</S.PlanetName>
      </S.Card>
    );
  }
}

PlanetCard.propTypes = {
  size: PropTypes.number.isRequired,
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
