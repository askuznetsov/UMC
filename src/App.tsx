import React, { useState } from "react";
import "./App.css";

interface ModalProps {
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, className, children }) => {
  const handleOverlayClick = (event: React.MouseEvent) => {
    onClose();
  };

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={`modal ${className}`} onClick={handleOverlayClick}>
      <div className='modal-content' onClick={handleContentClick}>
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
      <div className='content'>
        Greetings, my dear friend! <br /> I'm just a dumb message to fulfill an
        empty space. Here is my sad story.{" "}
        <strong>Click the button below</strong> please, to give sense to my
        life.
        <br />
        <button onClick={openModal}>Open modal window</button>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal} className='modal-open'>
          <p>I've asked one AI how it sees Armar Solutions. Here is it.</p>
          <img
            src='/Armar_solutions.png'
            alt='Armar Solutions AI generated pic'
            className='modal-image'
          />
          <div></div>
          <button onClick={openNestedModal}>Open another modal window</button>
        </Modal>
      )}
      {isNestedModalOpen && (
        <Modal onClose={closeNestedModal} className='modal-nested'>
          <p>Then I asked it to redraw.</p>
          <img
            src='/Armar_solutions_2.png'
            alt='Another Armar Solutions AI generated pic'
            className='modal-image'
          />
          <div></div>
          <button onClick={closeNestedModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default App;
