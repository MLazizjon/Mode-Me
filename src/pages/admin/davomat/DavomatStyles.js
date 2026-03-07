import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div` /* Твой стандартный отступ сайдбара */
  width: calc(100% - 260px);
  padding: 80px;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #f8fafc;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 1100px) {
    margin-left: 0;
    width: 100%;
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 { 
    font-size: 26px; 
    font-weight: 800; 
    color: #1e293b; 
    margin: 0; 
  }
  
  p { 
    color: #64748b; 
    font-size: 14px; 
    margin: 4px 0 0 0; 
  }

  .btns { 
    display: flex; 
    gap: 12px; 
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
  }

  .label { 
    font-size: 14px; 
    color: #64748b; 
    font-weight: 600; 
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .value { 
    font-size: 28px; 
    font-weight: 800; 
    color: #0f172a; 
  }
`;

export const FilterBar = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  gap: 20px;
  align-items: flex-end;
  margin-bottom: 24px;
  
  .filter-group { 
    display: flex; 
    flex-direction: column; 
    gap: 8px; 
    flex: 1; 
  }

  label { 
    font-size: 12px; 
    font-weight: 700; 
    color: #94a3b8; 
    text-transform: uppercase; 
  }

  select, input { 
    padding: 12px; 
    border: 1px solid #e2e8f0; 
    border-radius: 10px; 
    outline: none; 
    font-size: 14px;
    background: #fdfdfd;
    transition: border-color 0.2s;

    &:focus {
      border-color: #3b82f6;
    }
  }
`;

export const TableWrapper = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);

  /* Кастомизация скроллбара */
  &::-webkit-scrollbar { height: 8px; }
  &::-webkit-scrollbar-track { background: #f1f5f9; }
  &::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  
  th { 
    background: #f8fafc; 
    padding: 16px; 
    text-align: center; 
    font-size: 12px; 
    font-weight: 700;
    color: #64748b; 
    border-bottom: 1px solid #e2e8f0;
    text-transform: uppercase;
  }

  th:first-child { text-align: left; position: sticky; left: 0; background: #f8fafc; z-index: 10; }
  
  td { 
    padding: 14px 16px; 
    border-bottom: 1px solid #f1f5f9; 
    font-size: 14px; 
    text-align: center;
  }

  .student-info { 
    display: flex; 
    align-items: center; 
    gap: 12px; 
    text-align: left;
    position: sticky;
    left: 0;
    background: white;
    z-index: 5;
    min-width: 250px;

    .avatar { 
      width: 36px; 
      height: 36px; 
      border-radius: 10px; 
      background: #3b82f6; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      font-weight: 700; 
      color: white;
      font-size: 14px;
    }

    .name-box {
      display: flex;
      flex-direction: column;
      
      .name { font-weight: 600; color: #1e293b; }
      .sub { font-size: 11px; font-weight: 700; }
    }
  }

  tr:hover td {
    background-color: #f8fafc;
  }
`;

export const StatusCell = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  user-select: none;

  background: ${props => {
    if (props.status === 'check') return '#dcfce7';
    if (props.status === 'cross') return '#fee2e2';
    return '#f1f5f9';
  }};

  color: ${props => {
    if (props.status === 'check') return '#166534';
    if (props.status === 'cross') return '#991b1b';
    return '#94a3b8';
  }};

  border: 1px solid ${props => {
    if (props.status === 'check') return '#bbf7d0';
    if (props.status === 'cross') return '#fecaca';
    return 'transparent';
  }};

  &:hover {
    transform: scale(1.1);
    filter: brightness(0.95);
  }
`;