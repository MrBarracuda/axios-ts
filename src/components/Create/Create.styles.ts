import styled from "styled-components";
import {PRIMARY_COLOR} from "../../constants";

export const StyledCreate = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  label {
    text-align: left;
    display: block;
  }
  
  h2 {
    font-size: 20px;
    color: ${PRIMARY_COLOR};
    margin-bottom: 30px;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }
  
  button {
    background-color: #f1356d;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }

`