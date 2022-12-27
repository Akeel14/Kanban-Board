import styled from "styled-components";

export const TaskContainer = styled.div`
  background-color: #ffd600;
  border-bottom: 1px solid #ccc;
  position: relative;
  border-radius: 20px;
  height: 250px;
  margin-bottom: 10px;
  margin: 0px 10px 10px 10px;

  .title {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    display: block;
    overflow-x: hidden;
  }
  .description {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 16px;
    //display: block;
    overflow-y: hidden;
  }
  .title,
  .description {
    display: flex;
    flex-direction: column;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    img {
      width: 25px;
      height: 25px;
    }
  }
  .edit-buttons {
    position: absolute;
    top: 15px;
    right: 50px;
    display: flex;
    flex-direction: row;
  }
  .delete-buttons {
    position: absolute;
    top: 15px;
    right: 5px;
    display: flex;
    flex-direction: row;
  }
  .Update {
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
  }
  .Cancel {
    position: absolute;
    bottom: 10px;
    right: 100px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
  }
`;

export const TaskFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input {
    width: 300px;
    height: 30px;
    margin: 5px 3px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    opacity: 0.5;
  }
  textarea {
    width: 300px;
    height: 150px;
    margin-left: 3px;
    overflow: auto;
    resize: none;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    forced-color-adjust: none;
    opacity: 0.5;
  }
`;
