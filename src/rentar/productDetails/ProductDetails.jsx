import {
  ProductDetailsContainer,
  Table,  
  Td,
  Th,
  Tr,
} from './ProductDetails.styles';

export const ProductDetails = ({ producto }) => {
  return (
    <ProductDetailsContainer>
      <h2>{producto.nombre || '--'}</h2>
      <h2>${producto.precio_renta || producto.precio}</h2>
      <Table>
        <thead>
          <tr>            
              <Th>QTY</Th>            
              <Th>Descripcion</Th>
          </tr>
        </thead>
        <tbody>          
            <Tr>              
                <Td>{producto.cantidad1 || 1}</Td>              
                <Td>{producto.producto1  || producto.descripcion}</Td>
            </Tr>
            <Tr>
              <Td>{producto.cantidad2}</Td>              
              <Td>{producto.producto2}</Td>
            </Tr>
        </tbody>
      </Table>
      <button className='blue-button'>Subir a la troca</button>      
    </ProductDetailsContainer>
  );
};
