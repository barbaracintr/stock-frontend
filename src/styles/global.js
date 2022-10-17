import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Inter, sans-serif;
    }
    button, a, summary{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        background: #fff;
    }
`;

export const FlexContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;
