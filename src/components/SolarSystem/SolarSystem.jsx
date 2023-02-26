import React from 'react';
import Title from '../Title';
import Planets from '../../data/planets';
import PlanetCard from './PlanetCard';
import * as S from './styles';
import line from '../../assets/line.svg';

class SolarSystem extends React.Component {
  render() {
    const generatePlanets = Planets.map(
      ({ name, image }, index) => (
        <PlanetCard
          key={ index }
          size={ index + 1 }
          planetName={ name }
          planetImage={ image }
        />
      ),
    );
    return (
      <S.SolarSystemContainer data-testid="solar-system">
        <Title headline="Planetas" />
        <S.Line src={ line } alt="Linha" />
        <S.PlanetsContainer>
          {generatePlanets}
        </S.PlanetsContainer>
      </S.SolarSystemContainer>
    );
  }
}

export default SolarSystem;
