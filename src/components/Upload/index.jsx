import { Box, Form, StyledPaper } from "./styles";
import { Button } from "@mui/material";

import { NavBar } from "../NavBar";

import { useRef } from "react";

import { api } from "../../data";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Upload = () => {

  const inputEl = useRef();

  const onButtonClick = (e) => {
    e.preventDefault();

    const file = inputEl.current.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      let text = e.target.result;
      const array = text.split("\n");
      array.shift();

      let array2 = array.filter((line) => {
        return line !== "";
      });

      const array3 = array2.map((elem) => {
        return elem.split(',"');
      });

      const array4 = array3.map((elem) => {
        return elem.map((e) => {
          return e.replace('"', "").replace(",", ".");
        });
      });

      array4.map((elem) => {
        const date = new Date(elem[0]);
        const newDate = new Intl.DateTimeFormat("pt-BR").format(date);
        const dateEn = newDate.split("/").reverse().join("-");
        elem.splice(0, 1, dateEn);
      });

      const stocks = {
        data: array4
      };

      setData(stocks);
      function setData(dataJson) {
        api
          .post("/stocks", {
            dataJson,
          })
          .then((response) => console.log(response))
          .then((response) => toast.success("Dados enviados com sucesso"))
          .catch((err) => toast.error("Erro ao enviar os dados"));
        }
  }

    reader.readAsText(file);
  };

  return (
    <Box>
      <NavBar />

      <StyledPaper elevation={6}>
        <Form onSubmit={onButtonClick}>
          <h1>Upload do Arquivo</h1>

          <label htmlFor="file">Estoque Principal</label>
          <input id="file" type="file" accept=".csv" ref={inputEl} />
          <Button variant="contained" type="reset">
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            Enviar Arquivo
          </Button>
        </Form>
      </StyledPaper>
    </Box>
  );
};
