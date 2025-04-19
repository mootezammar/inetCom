export interface Student {
  id: string;
  name: string;
  email: string;
  age: number;
  phone: string;
  average: number;
  photo: string;
  year: 1 | 2 | 3;
  program: string;
  bio: string;
}

export interface Program {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  years: number;
  options?: {
    id: string;
    name: string;
    description: string;
  }[];
}