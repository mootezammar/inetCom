import React from 'react';
import Hero from '../components/Hero';
import { Check, Award, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <Hero 
        title="À Propos de Notre Faculté"
        subtitle="Découvrez l'excellence académique et notre engagement envers l'innovation et la réussite de nos étudiants."
        image="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height="medium"
      />
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Notre Mission & Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Mission */}
              <div className="p-8 border rounded-lg bg-primary-50 border-primary-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-serif">Notre Mission</h3>
                <p className="text-gray-700">
                  Former des ingénieurs hautement qualifiés, dotés de compétences techniques solides et d'une 
                  capacité d'adaptation aux évolutions constantes des technologies et du marché. Notre objectif 
                  est de contribuer au développement de l'écosystème numérique national et international à travers 
                  l'excellence académique et la recherche appliquée.
                </p>
              </div>
              
              {/* Vision */}
              <div className="p-8 border rounded-lg bg-secondary-50 border-secondary-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-serif">Notre Vision</h3>
                <p className="text-gray-700">
                  Devenir une référence internationale dans la formation d'ingénieurs en technologies numériques, 
                  reconnus pour leur excellence, leur capacité d'innovation et leur impact sur la société. Nous aspirons 
                  à être un pôle d'innovation où enseignement, recherche et partenariats industriels convergent pour 
                  répondre aux défis technologiques du futur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre faculté s'appuie sur des valeurs fondamentales qui guident notre approche pédagogique 
              et notre relation avec les étudiants, les partenaires et la société.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="p-6 text-center card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full text-primary-600">
                <Award size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 font-serif">Excellence</h3>
              <p className="text-gray-600">
                Nous poursuivons l'excellence dans toutes nos activités, en maintenant les plus hauts standards de qualité 
                dans l'enseignement, la recherche et les partenariats.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="p-6 text-center card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full text-primary-600">
                <BookOpen size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 font-serif">Innovation</h3>
              <p className="text-gray-600">
                Nous encourageons l'innovation et la créativité dans l'apprentissage, la recherche et les solutions 
                développées par nos étudiants et enseignants.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="p-6 text-center card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full text-primary-600">
                <Users size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 font-serif">Inclusion</h3>
              <p className="text-gray-600">
                Nous valorisons la diversité et l'inclusion, créant un environnement où chacun peut s'épanouir, 
                contribuer et atteindre son plein potentiel.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="p-6 text-center card hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full text-primary-600">
                <Check size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 font-serif">Intégrité</h3>
              <p className="text-gray-600">
                Nous agissons avec honnêteté, transparence et responsabilité dans toutes nos interactions avec 
                nos étudiants, partenaires et la communauté.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Notre Histoire</h2>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-12 pb-8 border-l-2 border-primary-200">
                <div className="absolute -left-3 top-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full text-white text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">Fondation (2005)</h3>
                <p className="text-gray-600">
                  Création de la faculté InetCom avec l'objectif de former une nouvelle génération d'ingénieurs 
                  spécialisés dans les technologies de l'information et de la communication.
                </p>
              </div>
              
              <div className="relative pl-12 pb-8 border-l-2 border-primary-200">
                <div className="absolute -left-3 top-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full text-white text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">Développement (2010-2015)</h3>
                <p className="text-gray-600">
                  Expansion des programmes académiques avec l'introduction de nouvelles filières et spécialités 
                  pour répondre aux besoins évolutifs du marché. Développement de partenariats avec des entreprises 
                  technologiques nationales et internationales.
                </p>
              </div>
              
              <div className="relative pl-12 pb-8 border-l-2 border-primary-200">
                <div className="absolute -left-3 top-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full text-white text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">Innovation (2015-2020)</h3>
                <p className="text-gray-600">
                  Lancement de laboratoires de recherche spécialisés et d'incubateurs de startups pour encourager 
                  l'innovation et l'entrepreneuriat parmi nos étudiants. Introduction de pédagogies innovantes 
                  et de programmes d'échange internationaux.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute -left-3 top-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full text-white text-sm font-bold">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">Excellence (Aujourd'hui)</h3>
                <p className="text-gray-600">
                  Reconnue pour l'excellence de ses programmes et la qualité de ses diplômés, InetCom est aujourd'hui 
                  une référence dans la formation d'ingénieurs en technologies numériques, contribuant activement à 
                  l'écosystème d'innovation national et international.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Notre Campus</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Situé au cœur du pôle technologique, notre campus moderne offre un environnement 
              d'apprentissage inspirant et des installations de pointe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Bâtiment principal" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Bâtiment Principal</h3>
                <p className="text-gray-600">Salles de cours modernes et administration</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Laboratoires" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Laboratoires</h3>
                <p className="text-gray-600">Équipements de pointe pour la recherche et les projets</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Bibliothèque" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Bibliothèque</h3>
                <p className="text-gray-600">Ressources numériques et espaces de travail collaboratif</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;