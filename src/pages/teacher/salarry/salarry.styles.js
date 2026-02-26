import styled from 'styled-components';

export const Salary = styled.div`
  position: relative;
  top:60px;
  margin-left: 290px;
  padding: 50px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;
export const StatCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border-bottom: 5px solid ${props => props.color || '#007bff'};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #6c757d;
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    font-size: 28px;
    font-weight: 800;
    color: #343a40;
  }
`;