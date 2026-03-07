import styled from "styled-components";

export const Overlay = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 998;
  }
`;

export const SidebarSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: ${(props) => props.width}px;

  background: #fff;
  border-right: 1px solid #e5e7eb;

  z-index: 999;

  transition: width 0.3s ease, transform 0.3s ease;

  overflow: hidden;

  box-sizing: border-box;

  @media (max-width: 900px) {
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(-100%)"};

    box-shadow: ${(props) =>
      props.show ? "2px 0 12px rgba(0,0,0,0.2)" : "none"};
  }
`;

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0px 10px;
`;

export const MenuItems = styled.div`
  flex: 1;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    text-decoration: none;
    color: #6b7280;

    padding: 10px;

    display: flex;
    align-items: center;

    border-radius: 8px;

    transition: background 0.3s, color 0.3s;

    span {
      width: 30px;
      font-size: 18px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      background: #f3f4f6;
      color: #1e90ff;
    }

    &.active {
      background: #eef4ff;
      color: #1e90ff;
      font-weight: 600;
    }
  }
`;

export const ToggleButton = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: grey;

  border-radius: 8px;

  font-size: 22px;

  padding: 10px;

  margin-top: 20px;

  transition: 0.3s;

  &:hover {
    background: #f3f4f6;
    color: #1e90ff;
  }
`;