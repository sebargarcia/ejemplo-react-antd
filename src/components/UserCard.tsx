import { Card, Col, Row } from "antd";
import React, { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import { IUser } from "../models/user.model";

const UserCard = () => {
  console.log("Component UserCard rendered");
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>
        Bienvenido {user.nombre} {user.apellido}
      </h2>
      <p>Datos del usuario</p>
      <Row>
        <Col span={6}>
          <p>Nombre: {user.nombre}</p>
        </Col>
        <Col span={6}>
          <p>Apelllido: {user.apellido}</p>
        </Col>
        <Col span={6}>
          <p>Edad: {user.edad}</p>
        </Col>
        <Col span={6}>
          <p>Usuario: {user.user}</p>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(UserCard);
