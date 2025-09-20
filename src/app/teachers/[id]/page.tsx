'use client';

import { useParams } from 'next/navigation';

const getTeacherById = async (id: string) => {
  return {
    id,
    fullName: 'John Doe',
    dateOfBirth: '1990-04-12',
    description:
      'An experienced English teacher with over 10 years of experience in academic and conversational English.',
    certificate: 'TESOL Certified (2021)',
    groups: ['IELTS A1', 'General English', 'Teens Starter'],
  };
};

const TeacherDetailPage = () => {
  const params: { id: string } = useParams();

  return (
    <div>
      <h1>Teacher Details</h1>
      <p>ID: {params.id}</p>
    </div>
  );
};

export default TeacherDetailPage;
