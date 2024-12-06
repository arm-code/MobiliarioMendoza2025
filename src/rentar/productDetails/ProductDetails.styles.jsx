import styled from "styled-components";

export const ProductDetailsContainer= styled.div`    
    background-color: var(--white);    
    padding: 15px;
    display: flex;
    align-items: center;
    flex-direction:  column;
    gap: 15px;
`
// Estilos para la tabla
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 8px 12px;
  border-bottom: 2px solid #ddd; /* Línea inferior más gruesa para encabezados */
  font-weight: bold;
`;

export const Td = styled.td`
  text-align: left;
  padding: 8px 12px;
  border-bottom: 1px solid #ddd; /* Línea inferior para celdas */
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f9f9f9; /* Resaltado al pasar el mouse */
  }
`;