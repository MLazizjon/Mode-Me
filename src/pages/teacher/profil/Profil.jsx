import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Profil = () => {
  const { guruhId, studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(guruhId);
    if (data) {
      const students = JSON.parse(data);
      const foundStudent = students.find(s => s.id === studentId);
      setStudent(foundStudent);
    }
  }, [guruhId, studentId]);

  if (!student) {
    return <div style={{padding: '20px'}}>Talaba topilmadi...</div>;
  }
  const guruhNomi = guruhId.replace("_data", "").toUpperCase();

  return (
    <ProfileContainer>
      <Card>
        <BackButton onClick={() => navigate(-1)}>← Orqaga</BackButton>
        <Avatar>{student.name.charAt(0)}</Avatar>
        <InfoTitle>{student.name}</InfoTitle>
        <hr />
        <DetailRow>
          <strong>Guruh:</strong> <span>{guruhNomi}</span>
        </DetailRow>
        <DetailRow>
          <strong>Telefon:</strong> <span>{student.phone || "Kiritilmagan"}</span>
        </DetailRow>
        <DetailRow>
          <strong>To'lov holati:</strong> 
          <StatusBadge paid={student.isPaid}>
            {student.isPaid ? "To'langan" : "To'lanmagan"}
          </StatusBadge>
        </DetailRow>
        <DetailRow>
          <strong>Davomat (16 kunlik):</strong>
          <AttGrid>
            {student.attendance.map((a, i) => (
              <AttDot key={i} status={a}>{i + 1}</AttDot>
            ))}
          </AttGrid>
        </DetailRow>
      </Card>
    </ProfileContainer>
  );
};
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #f4f7f6;
  min-height: 80vh;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 450px;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  border: none;
  background: none;
  color: #007bff;
  cursor: pointer;
  font-weight: bold;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 15px;
`;

const InfoTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
`;

const StatusBadge = styled.span`
  background: ${props => props.paid ? '#28a745' : '#dc3545'};
  color: white;
  padding: 2px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const AttGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 5px;
  margin-top: 10px;
`;

const AttDot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  background: ${props => props.status === true ? '#28a745' : props.status === false ? '#dc3545' : '#ccc'};
`;

export default Profil;