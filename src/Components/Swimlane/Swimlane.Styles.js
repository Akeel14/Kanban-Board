import styled from "styled-components";

export const SwimlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  min-width: 350px;
  max-width: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-x: scroll;

`;

export const SwimlaneHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
  min-height: 50px;
  h3 {
    flex:6;
    margin: 0;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 600;
    overflow: hidden;
  }
  button {
    flex:1;
    background: none;
    border: none;
    cursor: pointer;
    img {
 
      width: 25px;
      height: 25px;
    }
  }
`;

export const SwimlaneBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: calc(100% - 50px);
`;

