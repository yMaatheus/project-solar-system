import React from 'react';
import Title from '../Title';
import Planets from '../../data/planets';
import PlanetCard from './PlanetCard';
import * as S from './styles';

class SolarSystem extends React.Component {
  render() {
    const generatePlanets = Planets.map(
      ({ name, image }, index) => (
        <PlanetCard key={ index } planetName={ name } planetImage={ image } />
      ),
    );
    return (
      <S.SolarSystemContainer data-testid="solar-system">
        <Title headline="Planetas" />
        <S.PlanetsContainer>
          {generatePlanets}
        </S.PlanetsContainer>
      </S.SolarSystemContainer>
    );
  }
}

export default SolarSystem;
