import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); } 
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  width: ${({ sidebarWidth }) => `calc(100% - ${sidebarWidth}px)`};
  margin-left: ${({ sidebarWidth }) => `${sidebarWidth}px`};
  padding: 80px 20px 20px 20px;
  animation: ${fadeIn} 0.4s ease-out;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f8fafc;

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    padding: 15px;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
  flex-wrap: wrap;
`;

export const SearchBox = styled.div`
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 350px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: #3B82F6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    margin-left: 8px;
    font-size: 14px;
    background: transparent;
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`;

export const TableCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #E2E8F0;
  overflow-x: auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);

  table {
    min-width: 600px;
  }

  tr:hover {
    background-color: #F8FAFC;
  }
`;

export const StatusBadge = styled.span`
  padding: 6px 14px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 12px;
  display: inline-block;
  text-align: center;
  transition: transform 0.1s;

  background: ${props => 
    props.s === 'Kelgan' ? '#DCFCE7' : 
    props.s === 'Kechikkan' ? '#FEF3C7' : 
    '#FEE2E2'};
    
  color: ${props => 
    props.s === 'Kelgan' ? '#166534' : 
    props.s === 'Kechikkan' ? '#92400E' : 
    '#991B1B'};

  &:active {
    transform: scale(0.95);
  }
`;

export const StatBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  margin-bottom: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  .val {
    font-size: 28px;
    font-weight: 800;
    margin: 8px 0;
    color: #1E293B;
  }

  .bar {
    height: 8px;
    background: #F1F5F9;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 12px;
  }

  .fill {
    height: 100%;
    background: ${({ color }) => color};
    width: ${({ p }) => p}%;
    transition: width 0.5s ease-in-out;
  }
`;

export const PrimaryBtn = styled.button`
  background: #3B82F6;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #2563EB;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;