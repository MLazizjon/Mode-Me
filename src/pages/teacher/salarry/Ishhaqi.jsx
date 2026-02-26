import { Salary, Wrapper, StatsGrid, StatCard } from './salarry.styles';

const Ishhaqi = () => {
  const g1 = JSON.parse(localStorage.getItem("guruh1_data") || "[]");
  const g2 = JSON.parse(localStorage.getItem("guruh2_data") || "[]");
  const g3 = JSON.parse(localStorage.getItem("guruh3_data") || "[]");
  
  const allStudents = [...g1, ...g2, ...g3];
  if (allStudents.length === 0) {
    return (
      <Salary>
        <Wrapper>
          <h1 style={{ textAlign: 'center', marginTop: '50px', color: '#888' }}>
            Hozircha ma'lumotlar yo'q
          </h1>
        </Wrapper>
      </Salary>
    );
  }
  const paidCount = allStudents.filter(s => s.isPaid).length;
  const unpaidCount = allStudents.length - paidCount;
  let present = 0;
  let absent = 0;

  allStudents.forEach(s => {
    s.attendance.forEach(day => {
      if (day === true) present++;
      if (day === false) absent++;
    });
  });

  return (
    <Salary>
      <Wrapper>
        <h1>Markaz Umumiy Statistikasi</h1>
        <StatsGrid>
          <StatCard color="#007bff">
            <h3>Jami o'quvchilar</h3>
            <p>{allStudents.length} ta</p>
          </StatCard>
          <StatCard color="#28a745">
            <h3>To'lov qilganlar</h3>
            <p>{paidCount} ta</p>
          </StatCard>
          <StatCard color="#dc3545">
            <h3>To'lov qilmaganlar</h3>
            <p>{unpaidCount} ta</p>
          </StatCard>
          <StatCard color="#ffc107">
            <h3>Keldi / Kelmadi</h3>
            <p>{present} / {absent}</p>
          </StatCard>
        </StatsGrid>
      </Wrapper>
    </Salary>
  );
};
export default Ishhaqi;