import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  /* margin-left: 260px; Чтобы не уходило под сайдбар */
  width: calc(100% - 260px);
  padding: 80px;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #f8fafc;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 1100px) {
    margin-left: 0; 
    width: 100%; 
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;
  h1 { font-size: 24px; font-weight: 700; color: #0F172A; margin: 0; }
  p { color: #64748B; font-size: 14px; margin: 4px 0 0 0; }
`;

export const PrimaryBtn = styled.button`
  background: #3B82F6; color: white; border: none; padding: 10px 20px; 
  border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;
  &:hover { background: #2563EB; }
`;

export const FilterSection = styled.div`
  background: white; padding: 16px 24px; border-radius: 12px; border: 1px solid #E2E8F0;
  margin-bottom: 24px; display: flex; flex-direction: column; gap: 16px;
`;

export const Tabs = styled.div`
  display: flex; gap: 24px; border-bottom: 1px solid #E2E8F0;
`;

export const Tab = styled.button`
  background: none; border: none; padding: 10px 0; font-size: 14px; font-weight: 600;
  cursor: pointer; color: ${props => props.active ? '#3B82F6' : '#64748B'};
  border-bottom: 2px solid ${props => props.active ? '#3B82F6' : 'transparent'};
`;

export const Controls = styled.div`
  display: flex; gap: 12px; flex-wrap: wrap;
  input, select {
    padding: 10px 16px; border-radius: 8px; border: 1px solid #E2E8F0; outline: none; font-size: 14px;
  }
  input { flex: 1; min-width: 200px; }
`;

export const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;
`;

export const Card = styled.div`
  background: white; border-radius: 16px; padding: 20px; border: 1px solid #E2E8F0;
  &:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); }
`;

export const CardHeader = styled.div`
  display: flex; gap: 16px; align-items: flex-start; margin-bottom: 20px;
  .icon-box { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
  .info h3 { margin: 0 0 6px 0; font-size: 16px; color: #0F172A; }
`;

export const Badge = styled.span`
  padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;
  background: ${p => p.s === 'Faol' ? '#DCFCE7' : p.s === 'Yakunlangan' ? '#F1F5F9' : '#FEF3C7'};
  color: ${p => p.s === 'Faol' ? '#166534' : p.s === 'Yakunlangan' ? '#475569' : '#92400E'};
`;

export const CardDetails = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;
  .item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #475569; }
`;

export const ProgressBar = styled.div`
  .head { display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: #64748B; margin-bottom: 6px; }
  .bar { height: 6px; background: #F1F5F9; border-radius: 10px; overflow: hidden; }
  .fill { height: 100%; background: #3B82F6; width: ${p => p.percent}%; transition: width 0.5s ease-out; }
`;