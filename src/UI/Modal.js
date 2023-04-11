import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import PokemonCard from "../components/PokemonCard";
import PokemonCardBox from "../components/PokemonCardBox";

const ModalOverlay = (props) => {
  return <div className={styles.overlay} onClick={props.onConfirm}></div>;
};

const ModalContent = (props) => {
  const onClose = (e) => {
    if (e.target !== e.currentTarget) return;
    props.onConfirm();
  };
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles["modal-wrap"]}>
        <Card
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
          height={props.height}
          overflow={props.overflow}
        >
          <PokemonCardBox currentName={props.name} confirm={props.onConfirm}>
            <PokemonCard pokemon={props.data} confirm={props.onConfirm} />
          </PokemonCardBox>
        </Card>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalContent
          maxWidth="600px"
          maxHeight="600px"
          height="100%"
          overflow="auto"
          title={props.title}
          name={props.name}
          data={props.data}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("ui-modal")
      )}
    </>
  );
};

export default Modal;
