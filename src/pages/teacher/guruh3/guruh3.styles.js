import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 270px;
  margin-top: 70px;
  padding: 30px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  input {
    padding: 10px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
    &:focus { border-color: #007bff; }
  }
  button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    &:hover { background: #0056b3; }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid #eee;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1400px;
  th, td {
    border: 1px solid #eee;
    padding: 12px;
    text-align: center;
  }
  th { background: #f4f4f4; font-size: 13px; color: #555; }
  .prac { background: #fff5f5; color: #d9534f; font-weight: bold; }
`;

export const NameStatus = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => props.paid ? '#28a745' : '#dc3545'};
`;

export const StatusBtn = styled.button`
  background-color: ${props => props.paid ? '#28a745' : '#dc3545'};
  color: white;
  border: none;
  padding: 7px 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  font-size: 12px;
  transition: 0.2s;
  &:active { transform: scale(0.98); }
`;

export const AttendanceCell = styled.td`
  cursor: pointer;
  user-select: none;
  font-size: 18px;
  min-width: 45px;
  background-color: ${props => 
    props.status === true ? '#e6fffa' : 
    props.status === false ? '#fff5f5' : 'transparent'};
  
  &:hover { background-color: #f9f9f9; }
`;