import styled from "styled-components";

export const NewSwimlaneButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  margin-top: 50vh;
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
`;
