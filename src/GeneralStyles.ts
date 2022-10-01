import styled, {createGlobalStyle} from "styled-components";

export const GeneralStyles = createGlobalStyle`
  * {
    outline: none;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    scroll-behavior: smooth;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
    background: #fff6f6;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul, ol {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
export const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 680px;
  text-align: center;
  padding: 0 10px;
`
export const Content = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
`