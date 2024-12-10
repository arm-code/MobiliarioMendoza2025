import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  
`;

export const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;