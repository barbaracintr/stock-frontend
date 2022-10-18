import styled from "styled-components";

import { Paper } from "@mui/material";

export const Box = styled.div`
  display: flex;
  padding: 2em;
`;
export const StyledPaper = styled(Paper)`
  margin: 0 auto;
  width: 70%;
  height: 80vh;
  padding: 1em;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    text-align: center;
  }
`;
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    text-align: center;
  }
`;
export const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  gap: 1em;

  th {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
`;
