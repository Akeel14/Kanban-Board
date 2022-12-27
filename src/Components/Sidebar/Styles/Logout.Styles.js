import styled from "styled-components";

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  button {
    width: 300px;
    height: 40px;
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
