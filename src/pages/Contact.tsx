import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <div>
      {/* Hero */}
      <Hero 
        title="Contactez-Nous"
        subtitle="Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours."
        image="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height="medium"
      />
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 animate-fade-in">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
                    <h3 className="text-xl font-semibold text-green-800">Message envoyé!</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="admission">Admission</option>
                      <option value="programs">Programmes</option>
                      <option value="partnership">Partenariats</option>
                      <option value="careers">Carrières</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`inline-flex items-center px-6 py-3 font-medium text-white transition-colors rounded-md ${
                      isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                  >
                    {isLoading ? 'Envoi en cours...' : (
                      <>
                        Envoyer le message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Informations de Contact</h2>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">
                  N'hésitez pas à nous contacter pour toute question concernant nos programmes, 
                  admissions ou opportunités de partenariat. Notre équipe est là pour vous aider et vous guider.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Notre Adresse</h3>
                      <p className="text-gray-600">
                        Pôle Technologique de Sfax<br />
                        Route de Tunis Km 10<br />
                        B.P. 1163, 3018 Sfax, Tunisie
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Téléphone</h3>
                      <p className="text-gray-600">
                        +216 74 274 088<br />
                        +216 74 274 089
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        contact@enetcom.tn<br />
                        admissions@enetcom.tn
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.718304312933!2d10.755783975285018!3d34.73562897260826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cbd34f63907%3A0x3874f3f0ea685776!2sTechnopole%20de%20Sfax!5e0!3m2!1sfr!2stn!4v1697883231198!5m2!1sfr!2stn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus fréquemment posées par nos futurs étudiants et partenaires.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comment postuler à vos programmes d'ingénierie?
              </h3>
              <p className="text-gray-600">
                L'admission se fait soit par voie de concours national pour les étudiants issus des classes préparatoires, 
                soit par concours sur dossier pour les titulaires d'une licence dans les domaines connexes. 
                Consultez notre section Admission pour plus de détails sur les dates et procédures.
              </p>
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quelles sont les perspectives professionnelles pour vos diplômés?
              </h3>
              <p className="text-gray-600">
                Nos diplômés sont très recherchés sur le marché du travail, avec un taux d'insertion professionnelle 
                de plus de 90% dans les six mois suivant l'obtention du diplôme. Ils occupent des postes d'ingénieurs, 
                consultants, chefs de projets ou entrepreneurs dans des secteurs variés comme les télécommunications, 
                l'informatique, la data science et les systèmes embarqués.
              </p>
            </div>
            
            {/* FAQ 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proposez-vous des programmes d'échange international?
              </h3>
              <p className="text-gray-600">
                Oui, nous avons des partenariats avec plusieurs universités en Europe, Amérique du Nord et Asie. 
                Nos étudiants peuvent effectuer un semestre d'échange ou un double diplôme dans ces institutions partenaires. 
                Nous accueillons également des étudiants internationaux dans le cadre de ces programmes.
              </p>
            </div>
            
            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comment puis-je établir un partenariat avec votre institution?
              </h3>
              <p className="text-gray-600">
                Nous sommes ouverts aux partenariats avec les entreprises, universités et centres de recherche. 
                Ces collaborations peuvent prendre différentes formes: stages, projets de recherche, formations continues, 
                financement de laboratoires, etc. Contactez notre service de relations extérieures pour discuter des possibilités.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;