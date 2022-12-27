import styled from "styled-components";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const SendButton = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 5px;
  border-radius: 10px;
  background-color: #f2f2f2;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

export const Message = styled.div`
  color: green;
  font-size: 14px;
`;