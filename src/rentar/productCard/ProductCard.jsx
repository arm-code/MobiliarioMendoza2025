import { useState } from "react"
import { ProductCardContainer } from "./ProductCar.styles"
import { Modal } from "../../UI/modal/Modal"
import { ProductDetails } from "../productDetails/ProductDetails"

export const ProductCard = ({producto}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

  return (
    <ProductCardContainer>
        <h2>{producto.nombre_producto}</h2>
        <h2>${producto.precio}</h2>
        <button className="blue-button">Subir a la troca</button>
        <button className="green-button" onClick={openModal}>Ver detalles</button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ProductDetails producto={producto}/>
        </Modal>
    </ProductCardContainer>
  )
}
