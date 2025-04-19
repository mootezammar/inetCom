import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { students } from '../data/students';
import { programs } from '../data/programs';
import { Mail, Phone, Calendar, BookOpen, Award, ArrowLeft } from 'lucide-react';

const StudentDetail: React.FC = () => {
  const { programId, studentId } = useParams<{ programId: string; studentId: string }>();
  const navigate = useNavigate();
  
  const student = students.find(s => s.id === studentId);
  const program = programId ? programs.find(p => p.id === programId) : undefined;
  
  if (!student || !program) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Étudiant non trouvé</h2>
        <p className="mb-8 text-gray-600">L'étudiant que vous recherchez n'existe pas.</p>
        <button 
          onClick={() => navigate('/programs')}
          className="btn-primary"
        >
          Voir tous les programmes
        </button>
      </div>
    );
  }
  
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to={`/programs/${programId}/year/${student.year}`}
            className="inline-flex items-center mb-8 text-primary-600 hover:text-primary-700 transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-1" />
            Retour aux étudiants
          </Link>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left Column - Photo */}
              <div className="md:w-1/3 bg-primary-50">
                <div className="h-full relative">
                  <img 
                    src={student.photo || 'https://via.placeholder.com/400'}
                    alt={student.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400?text=Photo+Indisponible';
                    }}
                  />
                </div>
              </div>
              
              {/* Right Column - Information */}
              <div className="p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-primary-600 rounded-md mr-2">
                    {program.shortName}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium text-white bg-secondary-500 rounded-md">
                    {student.year}ème Année
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4 font-serif">{student.name}</h1>
                
                <p className="text-gray-600 mb-6">{student.bio}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{student.email}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{student.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{student.age} ans</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{program.name}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Moyenne: {student.average.toFixed(1)}/20</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 font-serif">Performance Académique</h2>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Moyenne générale</span>
                      <span className="font-semibold">{student.average.toFixed(1)}/20</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary-600 h-2.5 rounded-full" 
                        style={{ width: `${(student.average / 20) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic">
                    Note: Les détails complets des modules et notes ne sont accessibles qu'aux administrateurs et à l'étudiant concerné.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;