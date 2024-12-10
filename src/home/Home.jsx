import { HomeContainer, Subtitle, Title, Title2 } from './Home.styles';
import logo from '../assets/mobiNBG2.png';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { Carrousel } from '../UI/carrousel/Carrousel';
import hielera from '../assets/productImages/hielera.jpg'
import sillas from '../assets/productImages/sillas.jpg'
import mesaRoja from '../assets/productImages/mesaRoja.jpg'
import brinca from '../assets/productImages/brinca.jpg'
import mesaChica from '../assets/productImages/mesaChica.jpg'
import mesaRosa from '../assets/productImages/mesaRosa.jpg'

const Home = () => {

  const images = [
    hielera, sillas, mesaRoja, brinca, mesaChica, mesaRosa
  ]
  return (
    <HomeContainer>
      <div className='form-control'>
        <FaLocationDot style={{ color: 'blue' }} />
        <p>Ciudad Juarez CH</p>
      </div>
      <Title>RENTA DE MESAS Y SILLAS</Title>
      <Subtitle>Para todo tipo de eventos.</Subtitle>
      <br />
 
      
        <Carrousel images={images}/>
      

      <Subtitle>Puedes marcarnos o mandar un Whatsapp</Subtitle>
      <div className='form-control'>
        <FaPhone />
        <FaWhatsapp />
      </div>
      

      <a
        href='tel:6566031549'
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Title2>656 603 1549</Title2>
      </a>

      <a
        href='tel:6562147212'
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Title2>656 214 7212</Title2>
      </a>
      <a
        href='tel:6567788565'
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Title2>656 778 8565</Title2>
      </a>
      <Subtitle>Hacemos entregas unicamente en el sur de la ciudad:</Subtitle>
      <ul>
        <li>Areas las torres</li>
        <li>Praderas del sol</li>
        <li>Area Talamas</li>
        <li>Areas Riberas del Bravo</li>
        <li>Area Puerto de palos</li>
      </ul>

      <hr className='line-separated-top' />
      <br />
      <p>Mobiliario Mendoza</p>
      <img src={logo} alt='' />
    </HomeContainer>
  );
};

export default Home;
