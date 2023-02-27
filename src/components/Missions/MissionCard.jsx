import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import dateIcon from '../../assets/date-icon.svg';
import locationIcon from '../../assets/location-icon.svg';
import flagIcon from '../../assets/flag-icon.svg';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <S.MissionCard data-testid="mission-card">
        <S.MissionName data-testid="mission-name">{name}</S.MissionName>
        <S.AttributesWrapper>
          <S.MissionAttr data-testid="mission-year">
            <S.AttrIcon src={ dateIcon } alt="Date Icon" />
            {year}
          </S.MissionAttr>
          <S.MissionAttr padding="1.5" data-testid="mission-country">
            <S.AttrIcon src={ locationIcon } alt="Location Icon" />
            {country}
          </S.MissionAttr>
          <S.MissionAttr padding="1.5" data-testid="mission-destination">
            <S.AttrIcon src={ flagIcon } alt="Flag Icon" />
            {destination}
          </S.MissionAttr>
        </S.AttributesWrapper>
      </S.MissionCard>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
