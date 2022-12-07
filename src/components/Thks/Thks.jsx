import React from "react";
import { useParams } from "react-router-dom";

function Thks() {
  const idOrder = useParams().idOrder;

  return (
    <div>
      <h1>Gracias por realizar tu compra con nosotros</h1>
      <h3>
        Este es tu ID de compra: <strong>{idOrder}</strong>
      </h3>
    </div>
  );
}

export default Thks;