export type IProject = {
  title: string;
  images: string[];
  technologies: string[];
  frontend: string;
  server: string;
  description: string;
  live: string;
  deadline?: string;
  isDeleted: boolean;
  priority: 'low' | 'medium' | 'high';
};
