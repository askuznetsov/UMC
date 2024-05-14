import React, { useState } from "react";
import "./App.css";

interface ModalProps {
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, className, children }) => {
  return (
    <div className={`modal ${className}`}>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openNestedModal = () => {
    setIsNestedModalOpen(true);
  };

  const closeNestedModal = () => {
    setIsNestedModalOpen(false);
  };

  return (
    <div className='App'>
      <h1>React Modal App</h1>
      <button onClick={openModal}>Открыть модальное окно</button>
      {isModalOpen && (
        <Modal onClose={closeModal} className='modal-open'>
          <p>Это основное модальное окно!</p>
          <button onClick={openNestedModal}>
            Открыть вложенное модальное окно
          </button>
        </Modal>
      )}
      {isNestedModalOpen && (
        <Modal onClose={closeNestedModal} className='modal-nested'>
          <p>Это вложенное модальное окно!</p>
          <button onClick={closeNestedModal}>Закрыть</button>
        </Modal>
      )}
    </div>
  );
};

export default App;
