import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const generateMissions = missions.map(
      ({ name, year, country, destination }, index) => (
        <MissionCard
          key={ index }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      ),
    );
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {generateMissions}
      </div>
    );
  }
}

export default Missions;
