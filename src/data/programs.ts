import { Program } from '../types';
import tele from '../assets/tele.jpg'

export const programs: Program[] = [
  {
    id: 'idsd',
    name: "Ingénierie des Données et Systèmes Décisionnels",
    shortName: "IDSD",
    description: "La filière d'Ingénierie des Données et Systèmes Décisionnels (IDSD) s'inscrit dans l'objectif de répondre aux besoins des entreprises, œuvrant dans les secteurs du data. Cette filière introduit une formation de qualité dans les nouvelles technologies de pointe liées aux sciences des données et à l'informatique décisionnelle. Ladite filière mélange modélisation mathématique et statistique, informatique, visualisation et applications et a pour objectif de passer du stockage et de la diffusion de l'information à la création de connaissances.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: 3,
    options: [
      {
        id: 'sd',
        name: "Sciences des Données (SD)",
        description: "Cette option a pour but de donner aux élèves ingénieurs un mélange disciplinaire entre trois grands domaines : l'expertise mathématique, la technologie et le business. Les diplômés pourront occuper des métiers de data scientist, de data analyst, de consultant IA, d'analyste PI (Predictive index), de data strategist ou encore de consultant big data."
      },
      {
        id: 'id',
        name: "Informatique Décisionnelle (ID)",
        description: "Cette option a pour but de donner aux élèves ingénieurs des connaissances scientifiques leur permettant de concevoir des systèmes décisionnels en partant de la collecte de données jusqu'à la prise de décision. Les diplômés pourront occuper des métiers de consultant en business intelligence, d'auditeur informatique, de data architect, d'ingénieur big data, d'assistant à la maîtrise d'ouvrage (AMOA), de qualiticien des données."
      }
    ]
  },
  {
    id: 'telecom',
    name: "Télécommunications",
    shortName: "Telecom",
    description: "La filière Télécommunications forme des ingénieurs capables de concevoir, déployer et maintenir des infrastructures de communication modernes. Les étudiants acquièrent des compétences en réseaux, systèmes de transmission, technologies sans fil, et sécurité des communications.",
    image: tele,
    years: 3
  },
  {
    id: 'info',
    name: "Informatique et Systèmes",
    shortName: "Info",
    description: "La filière Informatique et Systèmes forme des ingénieurs spécialisés dans la conception et le développement de solutions informatiques complexes. Le programme couvre le développement logiciel, les systèmes distribués, le cloud computing et l'ingénierie des systèmes d'information.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    years: 3
  }
];