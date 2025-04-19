import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import { programs } from '../data/programs';
import ProgramCard from '../components/ProgramCard';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Faculté d'InetCom"
        subtitle="Formez-vous aux métiers du numérique et de l'ingénierie avec des programmes de pointe adaptés aux besoins du marché."
        image="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cta={{
          text: "Découvrir nos filières",
          link: "/programs"
        }}
      />
      
      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Excellence Académique</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre faculté offre une formation de haut niveau dans les domaines de pointe de l'ingénierie numérique, 
              combinant théorie et pratique pour former les leaders de demain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 text-center card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full text-primary-600">
                <Book size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 font-serif">Programmes Innovants</h3>
              <p className="text-gray-600">
                Des cursus à la pointe de la technologie, régulièrement mis à jour pour répondre aux évolutions du secteur.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 text-center card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full text-primary-600">
                <Users size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 font-serif">Corps Enseignant Qualifié</h3>
              <p className="text-gray-600">
                Des professeurs experts dans leurs domaines, alliant connaissance académique et expérience professionnelle.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 text-center card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full text-primary-600">
                <Award size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 font-serif">Insertion Professionnelle</h3>
              <p className="text-gray-600">
                Des partenariats solides avec les entreprises facilitant l'accès au stage et à l'emploi pour nos diplômés.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Nos Filières</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Découvrez nos programmes de formation d'excellence préparant aux métiers d'avenir dans l'ingénierie numérique.
              </p>
            </div>
            <Link 
              to="/programs"
              className="inline-flex items-center mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Voir toutes les filières
              <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Column - Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Étudiants travaillant ensemble" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Pourquoi Choisir InetCom?</h2>
              
              <div className="space-y-5">
                <div className="flex">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Formation Pratique</h3>
                    <p className="text-gray-600">Projets réels, laboratoires modernes et stages en entreprise pour une expérience complète.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Cursus International</h3>
                    <p className="text-gray-600">Possibilités d'échanges et de doubles diplômes avec des universités partenaires à l'étranger.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Accompagnement Personnalisé</h3>
                    <p className="text-gray-600">Tutorat, mentorat et suivi individuel pour maximiser le potentiel de chaque étudiant.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Innovation et Recherche</h3>
                    <p className="text-gray-600">Intégration à des projets de recherche et développement dès la formation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Prêt à Rejoindre l'Excellence?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Découvrez nos filières d'ingénierie et comment elles peuvent vous ouvrir les portes vers une carrière internationale dans les technologies de pointe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/programs" 
              className="px-6 py-3 font-medium transition-colors rounded-md bg-white text-primary-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              Découvrir les Filières
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 font-medium text-white transition-colors rounded-md bg-transparent border border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;