import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para el contenedor principal
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  color: var(--black);
  text-align: center;
  margin-top: 100px;
  padding: 20px;  
  
  img {
    height: 200px;
    
  }
  
`;

// Estilos para el título
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;  
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title2 = styled.h1`
  font-size: 2rem;
  font-weight: 600;  
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
`;

// Estilos para el subtítulo
export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  line-height: 1.5;  
  opacity: 0.9;
`;

// Estilos para el botón
export const FancyButton = styled.div`
  background-color: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 30px;
  font-size: 1.2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  
`;

// Nuevo contenedor de módulos
export const ModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

// Estilos para los botones de módulo
export const ModuleButton = styled(Link)`
  background-color: var(--green);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-decoration: none;

  &:hover {
    background-color: #2e8b57;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const PageContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px; 
  margin-top: 80px;
`

export const Module = styled.div`
  background-color: var(--gray-3);
  padding: 15px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`
