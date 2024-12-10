import React, { useEffect, useState } from "react";
import { Module, PageContainer } from "../../home/Home.styles";
import {ProductCard} from "../productCard/ProductCard";

export const ProductosPage = () => {
  const [productos, setProductos] = useState([]); // Estado para guardar los productos
  const [packs, setPacks] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para indicar si está cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener los productos
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://apimobmendoza2025.onrender.com/products/");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProductos(data); // Actualizar los productos
      } catch (err) {
        setError(err.message); // Guardar el error en el estado
      } finally {
        setLoading(false); // Finalizar carga
      }
    };

    const fetchPaquetes = async () => {      
      try {
        const response = await fetch("https://apimobmendoza2025.onrender.com/products/packs");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();              
        setPacks(data);        
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchPaquetes();
    fetchProductos();
  }, []);

  // Renderizado
  return (
    <PageContainer>
      <h1>Nuestros productos individuales</h1>
      {loading && <p>Cargando productos... por favor espere.</p>} 
      {error && <p>Error: {error}</p>}
      {!loading && !error && productos.length === 0 && (
        <p>No hay productos disponibles.</p>
      )}
      <Module>
        {productos.map((producto, index) => (
          <ProductCard key={index} producto = {producto}/>
        ))}
      </Module>
      <h1>Nuestros paquetes</h1>
      {loading && <p>Cargando paquetes... por favor espere.</p>} 
      {error && <p>Error: {error}</p>}
      {!loading && !error && productos.length === 0 && (
        <p>No hay paquetes disponibles.</p>
      )}
      <Module>
      {packs.map((pack, index) => (
          <ProductCard key={index} producto = {pack}/>
        ))}
      </Module>
    </PageContainer>
  );
};
