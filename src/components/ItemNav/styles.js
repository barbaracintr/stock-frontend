import { Link } from "react-router-dom";

import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  :first-child {
    margin-top: 1em;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #000;
  gap: 0.5em;
  height: 7vh;

  img {
    width: 1.6vw;
  }

  span {
    font-size: 0.9em;
  }

  :focus {
    color: blue;
  }
  :hover {
    color: blue;
  }
}
`;
