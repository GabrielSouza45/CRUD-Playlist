import React from "react";
import "./inputLabel.css";

const label = ({ texto, tipo, change, nome, valor, holder }) => {
  return (
    <>
      <label>{texto}</label>
      <input
        onChange={change}
        value={valor}
        name={nome}
        type={tipo}
        placeholder={holder}
      />
    </>
  );
};

export default label;
