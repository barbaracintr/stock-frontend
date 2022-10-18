import styled from "styled-components";

import { Paper } from "@mui/material";

export const Box = styled.div`
  display: flex;
  padding: 2em;
`;
export const StyledPaper = styled(Paper)`
  margin: 0 auto;
  width: 50%;
  padding: 1em;
`;
export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1em;
`;
