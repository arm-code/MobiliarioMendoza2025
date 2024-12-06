import { CloseButton, ModalContent, ModalOverlay } from './Modal.styles';
import { IoCloseCircle } from 'react-icons/io5';
export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoCloseCircle />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
