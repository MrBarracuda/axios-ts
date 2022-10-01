import styled from "styled-components";

<<<<<<< Updated upstream:src/index.css
/*blog previews*/


.blog-details {
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 10px;
}

.blog-details div {
  margin: 20px 0;
}

.create {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.create label {
  text-align: left;
  display: block;
}

.create h2 {
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 30px;
}

.create input, .create textarea, .create select {
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
}

.create button {
  background-color: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

/*search*/
.search {
  margin-bottom: 35px;
}
.search input{
  width: 90%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
.search button {
  background-color: #f1356d;
  color: #fff;
  border: 0;
  padding: 7px 10px;
  box-sizing: border-box;
  cursor: pointer;
}
=======
export const StyledSearch = styled.div`
  margin-bottom: 35px;

  & input {
    width: 90%;
    padding: 6px 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  & button {
    background-color: #f1356d;
    color: #fff;
    border: 0;
    padding: 7px 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

`
>>>>>>> Stashed changes:src/components/Search/Search.styles.tsx
