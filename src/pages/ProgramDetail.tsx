import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { programs } from '../data/programs';
import Hero from '../components/Hero';
import YearTabs from '../components/YearTabs';
import StudentYear from './StudentYear';

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const navigate = useNavigate();
  
  const program = programs.find(p => p.id === programId);
  
  if (!program) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Programme non trouvé</h2>
        <p className="mb-8 text-gray-600">Le programme que vous recherchez n'existe pas.</p>
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
    <div>
      {/* Hero */}
      <Hero 
        title={program.name}
        subtitle="Découvrez notre programme de formation d'excellence"
        image={program.image}
        height="medium"
      />
      
      {/* Program Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">À Propos du Programme</h2>
            
            <div className="mb-8 prose prose-lg max-w-none text-gray-600">
              <p>{program.description}</p>
              
              <p className="mt-4">
                Cette formation d'ingénieur porte essentiellement sur :
              </p>
              
              <ul>
                <li>Capacité d'analyse et de modélisation de données statistiques</li>
                <li>Bonne connaissance des outils et langages informatiques</li>
                <li>Connaissance approfondie d'outil analytique</li>
                <li>Bon bagage en mathématiques</li>
                <li>Bonne aptitude à la communication</li>
                <li>Respect de la confidentialité des données</li>
              </ul>
              
              <p className="mt-4">
                Cette filière d'ingénieur associe des cours théoriques et méthodologiques complétés par des projets 
                faisant intervenir tous les aspects de la filière, depuis l'acquisition jusqu'à l'exploitation et l'analyse.
              </p>
              
              <p className="mt-4">
                Ce cycle de formation s'étale sur quatre semestres réservés à une formation académique générale, 
                avec des aspects théoriques et appliqués. A la fin de la deuxième année, chaque élève-ingénieur, 
                admis en troisième année, sera affecté dans l'une des options.
              </p>
            </div>
            
            {/* Options if available */}
            {program.options && program.options.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Options de Spécialisation</h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {program.options.map(option => (
                    <div key={option.id} className="p-6 border rounded-lg bg-white shadow-sm">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{option.name}</h4>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Students Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Nos Étudiants</h3>
              <p className="text-gray-600 mb-8">
                Découvrez nos brillants étudiants qui suivent actuellement le programme {program.name}.
                Sélectionnez une année pour voir les étudiants correspondants.
              </p>
              
              <YearTabs programId={program.id} totalYears={program.years} />
              
              <StudentYear programId={program.id} year={1} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;