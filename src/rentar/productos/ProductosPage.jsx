import React, { useEffect, useState } from "react";
import { Module, PageContainer } from "../../home/Home.styles";

export const ProductosPage = () => {
  const [productos, setProductos] = useState([]); // Estado para guardar los productos
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

    fetchProductos();
  }, []); // Ejecutar al montar el componente

  // Renderizado
  return (
    <PageContainer>
      <h1>Nuestros productos</h1>
      {loading && <p>Cargando productos...</p>} {/* Mostrar mensaje mientras carga */}
      {error && <p>Error: {error}</p>} {/* Mostrar mensaje si hay error */}
      {!loading && !error && productos.length === 0 && (
        <p>No hay productos disponibles.</p>
      )} {/* Mostrar mensaje si no hay productos */}
      <Module>
        {productos.map((producto) => (
          <div key={producto.id} style={{ marginBottom: "1em" }}>
            <h2>{producto.name}</h2>
            <p>Precio: ${producto.price}</p>
            <p>{producto.description}</p>
          </div>
        ))}
      </Module>
    </PageContainer>
  );
};
