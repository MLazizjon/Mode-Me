import styled from "styled-components";

export const LoginSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0f2ff, #f4f6f9);
`;

export const Wrapper = styled.div`
  width: 350px;
  padding: 40px 30px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #1e293b;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 12px 15px;
  font-size: 16px;
  border: 1.5px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #1e90ff;
    box-shadow: 0 0 0 3px rgba(30,144,255,0.2);
  }
`;

export const Button = styled.button`
  padding: 12px;
  background: #1e90ff;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1c7ed6;
  }
`;