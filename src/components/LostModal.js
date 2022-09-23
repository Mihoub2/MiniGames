import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Modal
        isOpen={!isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <h1>Oh non... C'est raté!</h1>
        <p>Tu veux réessayé ? </p>
        <Link className="" to="/memory">
          <button className="">Click ici!</button>
        </Link>

        {/* <button onClick={toggleModal}>Close modal</button> */}
      </Modal>
    </div>
  );
}
