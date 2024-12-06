import styled from "styled-components";


// Estilos para el overlay del modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegúrate de que esté sobre otros elementos */
`;

// Estilos para el contenido del modal
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;  
  border-radius: 8px;
  max-width: 600px;
  width: 90%; /* Responsivo */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const CloseButton = styled.button`  
  width: 100%;
  text-align: right;
  background-color: transparent;
  border: none;
  font-size: 28px; 
  cursor: pointer;
  color: var(--red);
  &:hover {
    color: #000;
  }
`;