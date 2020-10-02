import { Button, Card, Col, Row, Spin } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Characters } from "../models/character.model";
import { Paginator } from "../models/paginator.model";
import { IUser } from "../models/user.model";
import StarWarsCharacters from "./User/StarWarsCharacters";

const DivStyled = styled.div`
  border: 2px solid #000000;
  width: 50%;
`;

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
  const [isLoading, setIsLoading] = useState(true);
  const [paginator, setPaginator] = useState<Paginator>({} as Paginator);
  const [current, setCurrent] = useState(1);
  const [apiUrl, setApiUrl] = useState<string>("https://swapi.dev/api/people");

  const fetchStarwarsCharacters = async (url: string) => {
    const response = await Axios.get(url);
    const data: Paginator = response.data;
    return data;
  };

  const onNextCharacters = () => {
    setIsLoading(true);
    setApiUrl(paginator.next);
  };

  const onPreviousCharacters = () => {
    setIsLoading(true);
    setApiUrl(paginator.previous);
  };

  const paginate = (page: number) => {
    console.log("Current: " + page);
    const url = "http://swapi.dev/api/people/?page=" + page;
    setIsLoading(true);
    setCurrent(page);
    setApiUrl(url);
  };

  useEffect(() => {
    fetchStarwarsCharacters(apiUrl)
      .then((paginator) => {
        setPaginator(paginator);
      })
      .finally(() => setIsLoading(false));
  }, [apiUrl]);

  return (
    <Row gutter={16}>
      <Col span={24}>
        <h1>Mis Personajes favoritos de Star Wars</h1>
      </Col>
      <Col>
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
          <Button
            disabled={!paginator.next}
            type="default"
            onClick={() => onNextCharacters()}
          >
            Siguientes Personajes
          </Button>
          <Button
            disabled={!paginator.previous}
            type="default"
            onClick={() => onPreviousCharacters()}
          >
            Anteriores Personajes
          </Button>
        </Card>
      </Col>
      <Col flex={1}>
        {isLoading ? (
          <div>
            <Spin />
            Cargando.....
          </div>
        ) : (
          <StarWarsCharacters
            paginate={(current) => paginate(current)}
            currentPage={current}
            total={paginator.count}
            list={paginator.results}
          ></StarWarsCharacters>
        )}
      </Col>
    </Row>
  );
};

export default User;
