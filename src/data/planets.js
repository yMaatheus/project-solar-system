import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const Planets = [
  { name: 'Mercúrio', image: MercurioImg },
  { name: 'Vênus', image: VenusImg },
  { name: 'Terra', image: TerraImg },
  { name: 'Marte', image: MarteImg },
  { name: 'Júpiter', image: JupiterImg },
  { name: 'Saturno', image: SaturnoImg },
  { name: 'Urano', image: Uranoimg },
  { name: 'Netuno', image: Netunoimg },
];

export const PlanetSizes = {
  1: { width: '2.625rem', height: '2rem' },
  2: { width: '6.375rem', height: '4.75rem' },
  3: { width: '6.625rem', height: '4.938rem' },
  4: { width: '4.125rem', height: '3.125rem' },
  5: { width: '17.625rem', height: '13.125rem' },
  6: { width: '17rem', height: '12.75rem' },
  7: { width: '9rem', height: '6.875rem' },
  8: { width: '9rem', height: '6.75rem' },
};

export default Planets;
