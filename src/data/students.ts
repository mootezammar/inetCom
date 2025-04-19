import { Student } from '../types';

export const students: Student[] = [
  // IDSD First Year
  {
    id: 'idsd-1-1',
    name: 'Amina Benali',
    email: 'amina.benali@enetcom.edu',
    age: 20,
    phone: '+216 55 123 456',
    average: 16.8,
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 1,
    program: 'idsd',
    bio: 'Passionnée par les mathématiques et la programmation, Amina excelle dans les cours fondamentaux et participe activement aux projets de groupe.'
  },
  {
    id: 'idsd-1-2',
    name: 'Youssef Chaari',
    email: 'youssef.chaari@enetcom.edu',
    age: 19,
    phone: '+216 55 234 567',
    average: 15.3,
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 1,
    program: 'idsd',
    bio: 'Youssef est connu pour ses compétences en programmation et son intérêt pour les technologies open source. Il contribue régulièrement à des projets sur GitHub.'
  },
  {
    id: 'idsd-1-3',
    name: 'Leila Mansouri',
    email: 'leila.mansouri@enetcom.edu',
    age: 20,
    phone: '+216 55 345 678',
    average: 17.5,
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 1,
    program: 'idsd',
    bio: 'Titulaire d\'un baccalauréat avec mention, Leila excelle particulièrement en algèbre linéaire et analyse de données. Elle est également membre du club de robotique.'
  },
  
  // IDSD Second Year
  {
    id: 'idsd-2-1',
    name: 'Ahmed Trabelsi',
    email: 'ahmed.trabelsi@enetcom.edu',
    age: 21,
    phone: '+216 55 456 789',
    average: 15.9,
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 2,
    program: 'idsd',
    bio: 'Ahmed se spécialise en apprentissage automatique et travaille actuellement sur un projet de reconnaissance d\'images. Il a effectué un stage chez une startup technologique locale.'
  },
  {
    id: 'idsd-2-2',
    name: 'Rania Zouari',
    email: 'rania.zouari@enetcom.edu',
    age: 20,
    phone: '+216 55 567 890',
    average: 18.2,
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 2,
    program: 'idsd',
    bio: 'Rania est la meilleure de sa promotion. Elle s\'intéresse particulièrement aux statistiques avancées et à la visualisation de données. Elle a remporté plusieurs compétitions d\'analyse de données.'
  },
  {
    id: 'idsd-2-3',
    name: 'Karim Mejri',
    email: 'karim.mejri@enetcom.edu',
    age: 21,
    phone: '+216 55 678 901',
    average: 16.4,
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 2,
    program: 'idsd',
    bio: 'Karim est spécialisé en bases de données et systèmes distribués. Il développe actuellement une plateforme de gestion de données pour une association étudiante.'
  },
  
  // IDSD Third Year
  {
    id: 'idsd-3-1',
    name: 'Sarra Belhadj',
    email: 'sarra.belhadj@enetcom.edu',
    age: 22,
    phone: '+216 55 789 012',
    average: 17.1,
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 3,
    program: 'idsd',
    bio: 'Sarra se spécialise en Sciences des Données et travaille sur un projet de fin d\'études en collaboration avec une entreprise internationale. Elle a déjà reçu plusieurs offres d\'emploi.'
  },
  {
    id: 'idsd-3-2',
    name: 'Mehdi Oueslati',
    email: 'mehdi.oueslati@enetcom.edu',
    age: 22,
    phone: '+216 55 890 123',
    average: 16.8,
    photo: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 3,
    program: 'idsd',
    bio: 'Mehdi suit l\'option Informatique Décisionnelle et réalise son stage de fin d\'études dans une banque, où il travaille sur un système d\'aide à la décision pour l\'évaluation des risques de crédit.'
  },
  {
    id: 'idsd-3-3',
    name: 'Nour Laabidi',
    email: 'nour.laabidi@enetcom.edu',
    age: 23,
    phone: '+216 55 901 234',
    average: 18.5,
    photo: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 3,
    program: 'idsd',
    bio: 'Major de sa promotion, Nour a choisi l\'option Sciences des Données et collabore avec un laboratoire de recherche sur un projet d\'intelligence artificielle appliquée à la médecine.'
  },
  
  // Add a few students for other programs as well
  {
    id: 'telecom-1-1',
    name: 'Tarek Bouzid',
    email: 'tarek.bouzid@enetcom.edu',
    age: 20,
    phone: '+216 56 123 456',
    average: 15.7,
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 1,
    program: 'telecom',
    bio: 'Tarek s\'intéresse particulièrement aux technologies sans fil et aux réseaux 5G. Il participe activement aux travaux pratiques en laboratoire.'
  },
  {
    id: 'telecom-1-2',
    name: 'Yasmine Khelifi',
    email: 'yasmine.khelifi@enetcom.edu',
    age: 21,
    phone: '+216 56 234 567',
    average: 16.9,
    photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 2,
    program: 'telecom',
    bio: 'Yasmine excelle en théorie des signaux et mène actuellement un projet sur l\'optimisation des réseaux de communication.'
  },
   {
    id: 'telecom-1-3',
    name: 'Yasmine Khelifi',
    email: 'yasmine.khelifi@enetcom.edu',
    age: 21,
    phone: '+216 56 234 567',
    average: 16.9,
    photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 2,
    program: 'telecom',
    bio: 'Yasmine excelle en théorie des signaux et mène actuellement un projet sur l\'optimisation des réseaux de communication.'
  },
  {
    id: 'info-1-1',
    name: 'Omar Hamdi',
    email: 'omar.hamdi@enetcom.edu',
    age: 19,
    phone: '+216 57 123 456',
    average: 16.2,
    photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 1,
    program: 'info',
    bio: 'Omar est passionné par le développement web et mobile. Il a déjà créé plusieurs applications en autodidacte avant d\'intégrer la formation.'
  },
  {
    id: 'info-1-2',
    name: ' Hamdi jarbou3i',
    email: 'omar.hamdi@enetcom.edu',
    age: 19,
    phone: '+216 57 123 456',
    average: 16.2,
    photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 1,
    program: 'info',
    bio: 'Omar est passionné par le développement web et mobile. Il a déjà créé plusieurs applications en autodidacte avant d\'intégrer la formation.'
  },
  {
    id: 'info-1-3',
    name: 'mootez ammar',
    email: 'mootezammar@enetcom.edu',
    age: 19,
    phone: '+216 57 123 456',
    average: 16.2,
    photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: 1,
    program: 'info',
    bio: 'Omar est passionné par le développement web et mobile. Il a déjà créé plusieurs applications en autodidacte avant d\'intégrer la formation.'
  },
  

];