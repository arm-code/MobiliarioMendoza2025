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
      <h2>{producto.nombre_producto}</h2>
      <h2>${producto.precio}</h2>
      <Table>
        <thead>
          <tr>            
              <Th>QTY</Th>            
              <Th>Descripcion</Th>
          </tr>
        </thead>
        <tbody>          
            <Tr>              
                <Td>test</Td>              
                <Td>test</Td>              
            </Tr>
        </tbody>
      </Table>
      <button className='blue-button'>Subir a la troca</button>
      <button className='red-button'>Ocultar detalles</button>
    </ProductDetailsContainer>
  );
};
