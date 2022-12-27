import styled from "styled-components";

export const ConfirmPasswordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: red;
  }
`;
