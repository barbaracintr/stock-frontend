import { NavBar } from "../../components/NavBar";

import { useContext, useState } from "react";

import { StatusContext } from "../../providers/status";

import { Box, StyledPaper } from "./styles"

import { Button } from "@mui/material";

export const Policy = () => {

  const { status } = useContext(StatusContext);

  const [ exc, setExc] = useState('')
  const [ crt, setCrt] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    status(exc, crt)
  }

  return (
    <Box>
      <NavBar />
      <StyledPaper elevation={6}>
      <h1>Política de Estoque</h1>
        <form>
            <label htmlFor="excellent">Ótimo</label>
            <input id='excellent' type='number' value={exc} onChange={(e) => setExc(e.target.value)}/>
            <label htmlFor="critical">Crítico</label>
            <input id="critical" type='number'value={crt} onChange={(e) => setCrt(e.target.value)}/>

            <Button variant="contained" type="reset">Cancelar</Button>
            <Button variant="contained" type="submit" onClick={handleClick}>Cadastrar</Button>
        </form>
      </StyledPaper>
    </Box>
  );
};
