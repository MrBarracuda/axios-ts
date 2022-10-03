import styled from "styled-components";
import {PRIMARY_COLOR} from "../../constants";

export const StyledBlogDetails = styled.div`
  font-size: 20px;
  color: ${PRIMARY_COLOR};
  margin-bottom: 10px;

  div {
    margin: 20px 0;
  }

  button {
    background: ${PRIMARY_COLOR};
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
`