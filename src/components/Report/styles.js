import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Paper } from "@mui/material";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;
export const StyledPaper = styled(Paper)`
  margin: 0 auto;
  width: 50%;
  height: 70vh;
  padding: 1em;
  overflow: auto;
`;
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  gap: 1em;
  
  h1{
    text-align: center;
  }
`;
export const Row = styled.tr`
  display: flex;
  justify-content: space-between;
`;
