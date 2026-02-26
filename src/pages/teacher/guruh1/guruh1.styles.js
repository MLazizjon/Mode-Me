import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 290px;
  margin-top: 70px;
  padding: 20px;
`;

export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  input { padding: 10px; width: 300px; border: 1px solid #ddd; border-radius: 5px; }
  button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid #eee;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1400px;
  th, td { border: 1px solid #ddd; padding: 10px; text-align: center; }
  th { background: #f4f4f4; font-size: 12px; }
  .prac { background: #ffebeb; color: red; }
`;

export const NameStatus = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => props.paid ? '#48bb78' : '#f56565'};
`;

export const StatusBtn = styled.button`
  background-color: ${props => props.paid ? '#48bb78' : '#f56565'};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
`;

export const AttendanceCell = styled.td`
  cursor: pointer;
  user-select: none;
  font-size: 18px;
  width: 40px;
  background-color: ${props => 
    props.status === true ? '#e6fffa' : 
    props.status === false ? '#fff5f5' : 'transparent'};
  
  &:hover { background-color: #f0f0f0; }
`;