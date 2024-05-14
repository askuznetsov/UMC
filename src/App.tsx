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
      <div className='content'>
        Greetings, my dear friend! <br /> I'm just a dumb message to fullfil an
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
            src='/Armar_solutions_png.png'
            alt='Armar Solutions AI generated pic'
            className='modal-image'
          />
          <button onClick={openNestedModal}>Open another modal window</button>
        </Modal>
      )}
      {isNestedModalOpen && (
        <Modal onClose={closeNestedModal} className='modal-nested'>
          <p>Then I asked it to redraw.</p>
          <img
            src='/Armar_solutions_png_2.png'
            alt='Another Armar Solutions AI generated pic'
            className='modal-image'
          />
          <button onClick={closeNestedModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default App;
