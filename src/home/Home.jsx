import { HomeContainer, Subtitle, Title } from './Home.styles';
import logo from '../assets/mobiNBG2.png';

const Home = () => {
  return (
    <HomeContainer>
      <Title>RENTA DE MESAS Y SILLAS</Title>
      <Subtitle>Para todo tipo de eventos.</Subtitle>
      <hr className='line' />
      <br />
      <p>Mobiliario Mendoza</p>
      <img src={logo} alt='' />
    </HomeContainer>
  );
};

export default Home;
