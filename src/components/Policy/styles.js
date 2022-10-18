import styled from "styled-components";
import { Paper } from "@mui/material";

export const Box = styled.div`
  padding: 2em;
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 80%;
    margin: 0 auto;
  }
`;
export const StyledPaper = styled(Paper)`
  display: flex;
  margin: 0 auto;
  width: 30%;
  padding: 1em;
  gap: 1.8em;

  h1{
    text-align: center;
  }
`;
export const Form = styled.form`
    display: flex;

    fieldset{
      border: none;
      display: flex;
      justify-content: space-around;
    }
    fieldset input{
      border: none;
      width: 5vw;
    }

    input:focus{
      font-weight: bold;
      color: blue;
      outline: 0;
    }
`;

