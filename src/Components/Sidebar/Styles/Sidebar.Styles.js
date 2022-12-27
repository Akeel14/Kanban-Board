import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 275px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 10;

  @media (max-width: 670px) {
    width: 100%;
    height: 50px;
  }
`;

export const SidebarToggle = styled.div`
  display: none;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;

  @media (max-width: 670px) {
    display: block;
  }
`;

export const SidebarToggleLine = styled.div`
  width: 35px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
`;

export const SidebarContent = styled.div`
  height: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100% - 50px);
    width: 100%;
    position: fixed;
    top: 50px;
    left: ${(props) => (props.isOpen ? "0" : "-100%")};
    transition: left 0.3s ease-out;
    background-color: #ffffff;
  }
`;

export const SidebarSection = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

export const SidebarSectionTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  color: #333;
`;

export const SidebarSectionContent = styled.div`
  margin-top: 10px;
`;
