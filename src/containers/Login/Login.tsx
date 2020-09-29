import React, { useState } from "react";
import InputLabel from "../../components/InputLabel";
import styled from "styled-components";
import { Input, Button, Row, Col, Modal } from "antd";
import { getParsedCommandLineOfConfigFile, getShebang } from "typescript";
import { IUser } from "../../models/user.model";

const users: IUser[] = [
  {
    nombre: "Seba",
    apellido: "Garcia",
    edad: 33,
    password: "test123",
    user: "sebargarcia",
  },
  {
    nombre: "Matias",
    apellido: "Rivero",
    edad: 33,
    password: "123456",
    user: "mrivero",
  },
  {
    nombre: "Usuario Prueba",
    apellido: "Apellido prueba",
    edad: 33,
    password: "test123",
    user: "test",
  },
];

const ButtonStyled = styled.button`
  border: 2px solid blueviolet;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: blueviolet;
  padding: 5px;
  :hover {
    background-color: #cb9ff2;
  }
`;

const DivStyled = styled.div`
  border: 1px solid #000000;
  border-radius: 10px;
  margin: 25px 25%;
  text-align: center;
  padding: 24px;
`;

const Login = ({ onLogin }: { onLogin: (userLogged: IUser) => void }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const login = () => {
    if (user === "" || password === "") {
      setErrorModalVisible(true);
      return;
    }

    for (const u of users) {
      if (u.user === user && u.password === password) {
        onLogin(u);
        return;
      }
    }

    setErrorModalVisible(true);
  };

  return (
    <DivStyled>
      <Modal
        title="Error de autenticación"
        visible={errorModalVisible}
        onOk={() => setErrorModalVisible(false)}
        onCancel={() => setErrorModalVisible(false)}
      >
        <p>El usuario o contraseña no son correctos</p>
      </Modal>

      <h1>SuperAPP</h1>
      <p>Inicie sesión para entrar</p>

      <Row gutter={16}>
        <Col span={12}>
          <Input
            placeholder="Usuario"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </Col>
        <Col span={12}>
          <Input
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Col>
        <Col span={24} style={{ marginTop: "10px" }}>
          <Button type="primary" onClick={() => login()}>
            Iniciar sesión
          </Button>
        </Col>
      </Row>
    </DivStyled>
  );
};

export default Login;
