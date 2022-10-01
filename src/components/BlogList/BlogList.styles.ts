import styled from "styled-components";
import {PRIMARY_COLOR} from "../../constants";

export const BlogPreview = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;

  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }

  & h2 {
    font-size: 20px;
    color: ${PRIMARY_COLOR};
    margin-bottom: 8px;
  }
`