import styled from "styled-components";

export const NewSwimlaneFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50vh;
  input {
    width: 300px;
    height: 40px;
    margin: 5px 0;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: 16px;
  }

  button {
    width: 300px;
    height: 40px;
    //margin: 5px 22px;
    margin-left: 15px;
    margin-top: 5px;
    border-radius: 10px;
    background-color: #f2f2f2;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
    &:hover {
      background-color: #ccc;
    }
  }
`;
