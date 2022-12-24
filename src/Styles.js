import styled from "styled-components";

export const App = styled.div`
  display: flex;
  position: relative;
  height: 100%; /* Add this line */
`;

export const Swimlanes = styled.div`
  display: flex;
  margin-left: 200px; /* Add this line */
  position: absolute;
  left: 200px;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-x: scroll;
`;

export const Sidebar = styled.div`
  width: 350px;
  height: 100%;
  position: fixed;
  overflow: auto;
  background-color: #eee;
  padding: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  input {
    width: 80%;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-right: 10px;
  }
  button {
    width: 20%;
    height: 35px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const StickyNotes = styled.div`
  margin-top: 20px;
  .blank-sticky-note {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      width: 80%;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0 10px;
      margin-right: 10px;
    }
    button {
      width: 20%;
      height: 35px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export const Filter = styled.div`
  margin-top: 20px;
  display: flex;
  margin-left: 150px; 
  flex-direction: column;
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    //margin-right: 10px;
    margin: 10px;
    cursor: pointer;
  }
  .yellow {
    background-color: #ffd600;
  }
  .green {
    background-color: #4caf50;
  }
  .red {
    background-color: #f44336;
  }
  .purple {
    background-color: #9c27b0;
  }
`;

export const StickyNotesAndFilter = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
  .sticky-notes {
    width: 70%;
  }
  .filter {
    width: 30%;
  }
`;


export const LogoutButton = styled.button`
  position: absolute;
  bottom: 75px;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  height: 35px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

// export const UserProfile = styled.div`
//   display: flex;
//   align-items: center;
//   img {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//   }
//   p {
//     margin-left: 10px;
//     font-size: 14px;
//   }
// `;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const UserTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: black;
`;


export const SwimlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-width: 350px;
  margin-right: 10px;
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

export const Container = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: width 0.5s ease;

  /* hide the sidebar when it is collapsed */
  ${props => props.isCollapsed && `
    width: 0;
    overflow: hidden;
  `}
`;

export const ToggleButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;