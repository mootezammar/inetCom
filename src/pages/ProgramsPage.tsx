import React from 'react';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import { programs } from '../data/programs';

const ProgramsPage: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <Hero 
        title="Nos Filières d'Ingénierie"
        subtitle="Découvrez nos programmes de formation d'excellence dans le domaine de l'ingénierie et des technologies."
        image="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height="medium"
      />
      
      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Filières d'Ingénierie</h2>
            <p className="text-lg text-gray-600">
              Notre faculté propose plusieurs filières d'ingénierie conçues pour répondre aux besoins actuels 
              du marché tout en préparant les étudiants aux défis futurs. Chaque programme offre un mélange 
              équilibré de théorie fondamentale et d'applications pratiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif text-center">Conditions d'Admission</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-6 text-gray-600">
                Les filières de formation d'ingénieurs à InetCom sont destinées principalement aux étudiants ayant réussi 
                aux concours nationaux d'entrée aux cycles de formation d'ingénieurs après deux années de cycles préparatoires :
              </p>
              
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Mathématiques et Physique (M-P)
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Physique et Chimie (P-C)
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Technologie (T)
                </li>
              </ul>
              
              <p className="mb-6 text-gray-600">
                Ces filières d'ingénieurs s'adressent aussi, à raison de 10% de sa capacité d'accueil, aux meilleurs étudiants 
                ayant obtenu une licence en:
              </p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Technologies de l'information et de communication
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Mathématiques appliquées
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Sciences de l'informatique
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Mathématiques et informatique
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Ingénierie des systèmes informatiques
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Technologies de l'informatique
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary-100 rounded-full text-primary-700 text-sm">•</span>
                  Informatique appliquée à la gestion
                </li>
              </ul>
              
              <p className="mt-6 text-gray-600 italic">
                L'admission se fait suite à un concours spécifique sur dossier ouvert à l'échelle nationale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;