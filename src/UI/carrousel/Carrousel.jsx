import { useState } from "react";
import { useEffect } from "react";
import { Carousel, CarouselContainer, CarouselItem, CircleImage } from "./Carrousel.styles";


export const Carrousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
  
      return () => clearInterval(timer); // Limpiar el temporizador
    }, [images.length, interval]);
  
    return (
      <CarouselContainer>
        <Carousel style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <CircleImage src={image} alt={`Carousel ${index}`} />
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselContainer>
    );
  };
  
