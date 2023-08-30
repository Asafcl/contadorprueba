import React from "react";
import "../estilos/Boton.css";

function Boton({ texto, btnEstado, clickOpcion }) {
  return (
    <div className="container">
      <button
        className={
          btnEstado === "reiniciar"
            ? "reiniciar"
            : btnEstado
            ? "btnIncrementar"
            : "btnReducir"
        }
        onClick={clickOpcion}
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
