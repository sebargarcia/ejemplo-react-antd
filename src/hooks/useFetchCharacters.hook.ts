import { useEffect, useState } from "react";
import { ResponseModel } from "../models/response.model";

const API_PATH = "https://swapi.dev/api/people";

const useFecthCharacters = () => {
  console.log("Entro al hook!");
  const [data, setData] = useState<ResponseModel>({} as ResponseModel);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_PATH + "?page=" + page)
      .then((response) => response.json())
      .then((result: ResponseModel) => {
        setData(result);
      })
      .catch(() => setError("Ha ocurrido un error recuperando datos"))
      .finally(() => setIsLoading(false));
  }, [page]);

  const fetchApi = (pager: number) => {
    setPage(pager);
  };

  return { data, isLoading, error, fetchApi };
};

export default useFecthCharacters;
