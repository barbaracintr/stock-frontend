import { ListStock } from "../ListStock";

import { useContext } from "react";
import { StatusContext } from "../../providers/status";

import { NavBar } from "../../components/NavBar";

import { Box, StyledPaper, Table, Row } from "./styles.js";

export const Report = () => {
  const { stocks } = useContext(StatusContext);

  return (
    <Box>
      <NavBar />

      <StyledPaper elevation={6}>
        <h1>Relatórios</h1>

        <Table>
          <Row>
            <th>Data</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
            <th>Status</th>
          </Row>
          {stocks?.map((value, index) => (
            <ListStock key={index} value={value} />
          ))}
        </Table>
      </StyledPaper>
    </Box>
  );
};
