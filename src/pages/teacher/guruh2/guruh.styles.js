import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  padding-left: 320px; 
  padding-right: 30px;
  box-sizing: border-box;
  @media (max-width: 1100px) {
    padding-left: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
`;

export const InputGroup = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 12px;
  input {
    padding: 12px; border: 2px solid #e1e4e8; border-radius: 8px; flex: 1; font-size: 16px; outline: none;
    &:focus { border-color: #007bff; }
  }
  button {
    padding: 10px 25px; background: #28a745; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;
    &:hover { background: #218838; }
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 10px; border: 1px solid #eee;
  &::-webkit-scrollbar { height: 8px; }
  &::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 1200px;
  border-collapse: collapse;
  white-space: nowrap;
  th, td { border-bottom: 1px solid #f0f0f0; padding: 15px; text-align: center; }
  th { background-color: #fafafa; color: #333; font-weight: 600; }
  tr:hover { background-color: #fcfcfc; }
`;

export const StatusBtn = styled.button`
  padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer; color: white; font-weight: 500;
  background: ${props => props.paid ? '#28a745' : '#dc3545'};
  transition: 0.3s;
`;

export const AttendanceCell = styled.td`
  cursor: pointer; font-size: 18px; transition: 0.2s;
  background: ${props => props.status === true ? '#eaffea' : props.status === false ? '#ffeef0' : 'transparent'};
  &:hover { background: #f0f0f0; }
`;

export const NameStatus = styled.span`
  width: 12px; height: 12px; display: inline-block; border-radius: 50%;
  background: ${props => props.paid ? '#28a745' : '#dc3545'}; margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  background: none; border: none; cursor: pointer; font-size: 20px; color: #dc3545; display: flex; align-items: center; justify-content: center; margin: 0 auto;
  &:hover { transform: scale(1.2); }
`;

export const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; z-index: 2000;
`;

export const ModalContent = styled.div`
  background: white; padding: 30px; border-radius: 12px; text-align: center; width: 350px;
  h3 { margin-bottom: 25px; line-height: 1.4; color: #333; }
`;

export const ModalActions = styled.div` display: flex; justify-content: center; gap: 15px; `;

export const ConfirmBtn = styled.button`
  background: #dc3545; color: white; border: none; padding: 10px 25px; border-radius: 6px; cursor: pointer; font-weight: bold;
  &:hover { background: #c82333; }
`;

export const CancelBtn = styled.button`
  background: #6c757d; color: white; border: none; padding: 10px 25px; border-radius: 6px; cursor: pointer; font-weight: bold;
  &:hover { background: #5a6268; }
`;