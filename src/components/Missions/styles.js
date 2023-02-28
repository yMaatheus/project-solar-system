import styled from 'styled-components';

export const MissionsContainer = styled.div`
  margin: auto;
  width: 80%;

  background: #FFFFFF;
  background-color: rgba(255, 255, 255, 0.1);

  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.9);
  border-radius: 2%;
`;

export const MissionsWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem 1rem 3rem 1rem;
`;

export const MissionCard = styled.div`
  width: 40%;
  margin: 1%;

  background: rgba(24, 26, 37, 0.5);
  mix-blend-mode: hard-light;

  border: 1px solid #FFFFFF;
  border-radius: 1.063rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  overflow-x: hidden;

  @media (max-width: 1260px) {
    width: 80%;
  }
`;

export const MissionName = styled.p`
  font-weight: 300;
  font-size: 1.75rem;
  line-height: 120%;

  display: flex;
  align-items: center;

  text-transform: uppercase;
  padding: 1.688rem
`;

export const AttributesWrapper = styled.section`
  border-top: 1px solid white;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  padding: 1.688rem;

  overflow-x: hidden;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const MissionAttr = styled.p`
  font-size: 1.125rem;
  line-height: 120%;

  padding: 0 ${(props) => (props.padding ? `${props.padding}rem` : '0.625rem')};

  display: inline-flex;
  align-items: center;

  @media (max-width: 720px) {
    font-size: 0.9rem;
    line-height: 120%;
    padding: 0.625rem 0;
  }
`;

export const AttrIcon = styled.img`
  vertical-align: middle;
  margin-right: 0.5rem;
  max-height: 18px;
`;
