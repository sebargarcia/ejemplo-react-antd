import { Button, Card } from "antd";
import React from "react";
import styled from "styled-components";
import { IUser } from "../models/user.model";

const DivStyled = styled.div`
  border: 2px solid #000000;
  width: 50%;
`;

const User = ({ user, onLogout }: { user: IUser; onLogout: () => void }) => {
  return (
    <Card title="Datos de usuario" style={{ width: 300, margin: "10px" }}>
      <h2>
        Bienvenido {user.nombre} {user.apellido}
      </h2>
      <p>Acabas de iniciar sesión</p>
      <p>Datos del usuario</p>
      <br></br>
      <p>Nombre: {user.nombre}</p>
      <p>Apelllido: {user.apellido}</p>
      <p>Edad: {user.edad}</p>
      <p>Usuario: {user.user}</p>

      <Button type="default" onClick={() => onLogout()}>
        Cerrar sesión
      </Button>
    </Card>
  );
};

export default User;
