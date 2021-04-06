import styled, { createGlobalStyle } from "styled-components"

export const Wrapper = styled.div`
  height: 100%;
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`