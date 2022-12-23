import styled from 'styled-components';

export const Swimlanes = styled.div`
  display: flex;
  height: 100%;
  overflow-x: scroll;
`;

export const SwimlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #fafafa;
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

export const Tasks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

export const NewSwimlaneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  min-width: 300px;
  height: 50px;
  border: 1px dashed #ccc;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;
