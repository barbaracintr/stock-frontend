import { Link } from "react-router-dom";

import styled from "styled-components"

export const Item = styled.li`
    color: red;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;

    img{
        width: 2.5vw;
        height: 5vh;
    }

    span{
        font-size: 0.9em;
    }
`