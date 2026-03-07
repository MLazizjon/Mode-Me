import styled from "styled-components";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: ${(props) => (props.showSidebar ? `${props.sidebarWidth}px` : "0")};
  width: ${(props) =>
    props.showSidebar
      ? `calc(100% - ${props.sidebarWidth}px)`
      : "100%"};

  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #dfe3eb;
  background: #f9fafe;

  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  z-index: 1000;

  transition: all 0.3s ease;

  box-sizing: border-box;

  @media (max-width: 900px) {
    left: 0;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    position: relative;

    input {
      width: 220px;
      height: 42px;
      padding: 0 15px;

      border-radius: 12px;
      border: 1px solid #cbd5e1;

      outline: none;

      font-size: 14px;

      background: #fff;

      transition: 0.3s;

      &:focus {
        border-color: #1e90ff;
        box-shadow: 0 0 0 3px rgba(30,144,255,0.2);
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 12px;

    .roleText {
      font-weight: 600;
      font-size: 14px;
      color: #1f2937;
    }

    .adminBtn {
      height: 42px;
      padding: 0 20px;

      border-radius: 12px;

      border: 1px solid #1e90ff;

      background: #1e90ff;
      color: #fff;

      font-weight: 500;

      cursor: pointer;

      transition: all 0.3s;

      font-size: 14px;

      &:hover {
        background: #1c86ee;
      }
    }

    .hamburger {
      display: none;

      font-size: 24px;

      background: none;
      border: none;

      cursor: pointer;
    }
  }

  @media (max-width: 900px) {

    .left input {
      width: 150px;
    }

    .right .hamburger {
      display: block;
    }

  }
`;

export const SuggestionList = styled.ul`
  position: absolute;

  top: 50px;
  left: 0;

  width: 220px;

  background: #fff;

  border: 1px solid #cbd5e1;

  border-radius: 8px;

  max-height: 200px;

  overflow-y: auto;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  z-index: 2000;

  list-style: none;

  margin: 0;
  padding: 0;

  li {
    padding: 10px 15px;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: #1e90ff;
      color: #fff;
    }
  }

  @media (max-width: 900px) {
    width: 150px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  background: rgba(0,0,0,0.4);

  display: flex;

  justify-content: center;
  align-items: center;

  z-index: 5000;
`;

export const ModalBox = styled.div`
  background: #fff;

  padding: 30px 25px;

  border-radius: 12px;

  text-align: center;

  max-width: 400px;

  width: 90%;
`;

export const ModalButtons = styled.div`
  display: flex;

  justify-content: center;

  gap: 20px;

  margin-top: 15px;

  button {

    padding: 8px 20px;

    border-radius: 8px;

    border: none;

    cursor: pointer;

  }

  button:first-child {

    background: #1e90ff;

    color: #fff;

  }

  button:last-child {

    background: #e5e7eb;

  }
`;