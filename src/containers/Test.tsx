import React, { useEffect, useState } from "react";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";

const Test = () => {
  console.log("Component render");

  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log("Ejecuto useEffect");
    document.title = `c1: ${counter1}, c2: ${counter2}`;
    setCounter1(counter1 + 20);
    // return () => {
    //   console.log("Se ejecuto el retorno del useEffect");
    // };
  }, []);

  return (
    <div>
      <p>Has clickeado contador 1: {counter1} veces</p>
      <p>Has clickeado contador 2: {counter2} veces</p>
      <Button
        style={{ marginRight: "10px" }}
        type="primary"
        onClick={() => setCounter1(counter1 + 1)}
      >
        Incrementar contador
      </Button>
      <Button type="primary" onClick={() => setCounter2(counter2 + 1)}>
        Incrementar contador 2
      </Button>
    </div>
  );
};

export default Test;
