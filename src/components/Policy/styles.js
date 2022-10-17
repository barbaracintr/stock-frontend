import styled from "styled-components";

import { Paper } from "@mui/material";

export const Box = styled.div`
  padding: 2em;

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 50%;
    margin: 0 auto;
  }
`;
export const StyledPaper = styled(Paper)`
  margin: 0 auto;
  width: 30%;
  padding: 1em;

  h1{
    text-align: center;
  }
`;
