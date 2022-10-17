import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

import { Box } from "./styles";

export const Home = () => {
  return (
    <Box>
      <NavBar />
      <Logo />
    </Box>
  );
};
