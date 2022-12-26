import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    margin-left: 8px;
    cursor: pointer;
    background-color: #333333;
    border: 2px solid #333333;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    transition: background 0.3s ease;

    Copy code &:hover {
      background: #444444;
    }
  }
`;
