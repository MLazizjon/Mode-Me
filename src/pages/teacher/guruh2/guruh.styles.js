import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 290px;
  margin-top: 70px;
  padding: 30px;
`;

export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;

  input {
    padding: 10px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    &:focus { border-color: #007bff; }
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    &:hover { background-color: #0056b3; }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Skrol chiqishi uchun */
  border: 1px solid #eee;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1400px; /* 16 ta dars sig'ishi uchun majburiy */

  th, td {
    border: 1px solid #e0e0e0;
    padding: 12px;
    text-align: center;
  }

  th {
    background-color: #f8f9fa;
    font-size: 13px;
    color: #333;
  }

  .prac {
    background-color: #fff5f5; /* Amaliyot darslari uchun */
    color: #d9534f;
    font-weight: bold;
  }
`;

export const NameStatus = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.paid ? '#28a745' : '#dc3545')};
`;

export const StatusBtn = styled.button`
  background-color: ${props => (props.paid ? '#28a745' : '#dc3545')};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  width: 100px;
  font-size: 12px;
`;

export const AttendanceCell = styled.td`
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  background-color: ${props => 
    props.status === true ? '#e6fffa' : 
    props.status === false ? '#fff5f5' : 'transparent'};
  
  &:hover { background-color: #f1f1f1; }
`;