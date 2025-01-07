export type IProject = {
  title: string;
  images: string[];
  tech: string[];
  frontend: string;
  backend: string;
  details: string;
  live: string;
  deadline: string;
  isDeleted: boolean;
  priority: 'low' | 'medium' | 'high';
};
