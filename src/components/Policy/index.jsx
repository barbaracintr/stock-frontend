import { NavBar } from "../../components/NavBar";

import { useContext, useState } from "react";

import { StatusContext } from "../../providers/status";

import { Box, StyledPaper, Form } from "./styles";
import { Button } from "@mui/material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Policy = () => {
  const { status } = useContext(StatusContext);

  const [excellent, setExcellent] = useState("");
  const [critical, setCritical] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    status(excellent, critical);
    if (excellent > 0 && critical > 0) return toast.success("Cadastro de política feito com sucesso")
    toast.error("Dados inválidos")
  };

  return (
    <Box>
      <NavBar />

      <StyledPaper elevation={6}>
        <Form>
          <h1>Política de Estoque</h1>

          <label htmlFor="excellent">Ótimo <span>&#62; {`${excellent}`}</span></label>
          <input
            id="excellent"
            type="number"
            placeholder="0"
            value={0 || excellent}
            onChange={(e) => setExcellent(e.target.value)}
          />

          <fieldset>
            <legend>Bom</legend>
            <label htmlFor="max" />
            <input id="max" disable value={excellent} />
            <spa>até</spa>
            <label htmlFor="min" />
            <input id="min" disable value={critical} />
          </fieldset>

          <label htmlFor="critical">Crítico <span>&#60; {`${critical}`}</span></label>
          <input
            id="critical"
            type="number"
            placeholder="0"
            value={0 || critical}
            onChange={(e) => setCritical(e.target.value)}
          />
          
          <Button variant="contained" type="submit" onClick={handleClick}>
            Cadastrar
          </Button>
        </Form>
      </StyledPaper>
    </Box>
  );
};
