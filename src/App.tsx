import {FC} from 'react';
import styled from "styled-components";


const Wrapper = styled.section`
  background: pink;
  padding: 0 calc(50vw - 590px);
`
const Content = styled.div`
background: aquamarine;
`

export const App:FC = () => {
  return (
      <Wrapper><Content>hi</Content></Wrapper>
  )
}

