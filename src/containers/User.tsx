import { Button, Card, Col, Row, Spin, Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createSecureContext } from "tls";
import useFecthCharacters from "../hooks/useFetchCharacters.hook";
import { Characters } from "../models/character.model";
import { ResponseModel } from "../models/response.model";
import { IUser } from "../models/user.model";

const DivStyled = styled.div`
  border: 2px solid #000000;
  width: 50%;
`;

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    render: (nombre: string) => <strong>{nombre}</strong>,
  },
  {
    title: "Color de piel",
    dataIndex: "skin_color",
    key: "skin_color",
  },
  {
    title: "Sexo",
    dataIndex: "gender",
    key: "gender",
  },
];

interface Paginator {
  current: number;
  pageSize: number;
}

// const characters: Characters[] = [
//   {
//     key: 1,
//     nombre: "Luke Skywalker",
//     tipo: "Jedi",
//     gender: "Male",
//   },
//   {
//     key: 2,
//     nombre: "Darth Vader",
//     tipo: "Sith",
//   },
//   {
//     key: 3,
//     nombre: "Chewacca",
//     tipo: "Raza rara",
//   },
//   {
//     key: 4,
//     nombre: "R2D2",
//     tipo: "Robot",
//   },
// ];

const User = ({ user, onLogout }: { user: IUser; onLogout: () => void }) => {
  const [paginator, setPaginator] = useState<Paginator>({
    current: 1,
    pageSize: 10,
  });

  const { data, isLoading, error, fetchApi } = useFecthCharacters();

  const paginate = (pager: TablePaginationConfig) => {
    console.log("Current: " + pager.current);
    if (!pager.current) {
      return;
    }
    setPaginator({
      ...paginator,
      current: pager.current,
    });

    fetchApi(pager.current);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Row gutter={16}>
      <Col span={24}>
        <h1>Mis Personajes favoritos de Star Wars</h1>
      </Col>
      <Col span={8}>
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
      </Col>
      <Col span={16}>
        <Table
          rowKey={(record) => record.name}
          dataSource={data.results}
          columns={columns}
          loading={isLoading}
          pagination={{ ...paginator, total: data.count ?? 0 }}
          onChange={paginate}
        />
      </Col>
    </Row>
  );
};

export default User;
