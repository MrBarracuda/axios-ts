import styled from "styled-components";
import {PRIMARY_COLOR} from "../../constants";

export const StyledNavbar = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;

  & h1 {
    color: ${PRIMARY_COLOR}
  }

  & a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
  }

  & a:hover {
    color: ${PRIMARY_COLOR}
  }

  & div {
    margin-left: auto;
  }
`