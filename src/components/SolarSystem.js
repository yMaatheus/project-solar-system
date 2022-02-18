import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const generatePlanets = Planets.map(
      ({ name, image }, index) => (
        <PlanetCard key={ index } planetName={ name } planetImage={ image } />
      ),
    );
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {generatePlanets}
      </>
    );
  }
}

export default SolarSystem;
