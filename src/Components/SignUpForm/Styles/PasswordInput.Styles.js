import styled from "styled-components";

export const PasswordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

export const PasswordInputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding: 0 10px;
`;

export const PasswordInputError = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;
