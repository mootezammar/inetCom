import React from 'react';
import { useParams } from 'react-router-dom';
import { students } from '../data/students';
import StudentCard from '../components/StudentCard';

interface StudentYearProps {
  programId: string;
  year?: number;
}

const StudentYear: React.FC<StudentYearProps> = ({ programId, year }) => {
  const params = useParams<{ year?: string }>();
  
  const currentYear = year || parseInt(params.year || '1');
  
  const filteredStudents = students.filter(
    student => student.program === programId && student.year === currentYear
  );
  
  if (filteredStudents.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-xl text-gray-600">
          Aucun étudiant trouvé pour cette année.
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredStudents.map(student => (
        <StudentCard key={student.id} student={student} programId={programId} />
      ))}
    </div>
  );
};

export default StudentYear;