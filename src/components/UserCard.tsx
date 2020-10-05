import { Card } from "antd";
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
      <p>Acabas de iniciar sesión</p>
      <p>Datos del usuario</p>
      <br></br>
      <p>Nombre: {user.nombre}</p>
      <p>Apelllido: {user.apellido}</p>
      <p>Edad: {user.edad}</p>
      <p>Usuario: {user.user}</p>
    </div>
  );
};

export default React.memo(UserCard);
