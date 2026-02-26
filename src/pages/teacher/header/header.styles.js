import styled from "styled-components";

export const HeaderSection = styled.header`
  height: 80px;
  width: calc(100% - 300px);
  position: fixed;
  left: 300px;
  top: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dfe3eb;
  background: #f9fafe;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .left {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .left input {
    width: 220px;
    height: 42px;
    padding: 0 15px;
    border-radius: 12px;
    border: 1px solid #cbd5e1;
    outline: none;
    font-size: 14px;
    background: #fff;
    transition: 0.3s;
  }

  .left input:focus {
    border-color: #1e90ff;
    box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.2);
  }

  .right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

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
    transition: 0.3s;
    font-size: 14px;
  }

  .adminBtn:hover {
    background: #1c86ee;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px 15px;
    cursor: pointer;
    transition: 0.2s;
  }

  li:hover {
    background: #1e90ff;
    color: #fff;
  }
`;

/* 🔥 Modal */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
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