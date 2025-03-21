import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProjectRoutes } from './app/modules/projects/project.route';
import { BlogRoutes } from './app/modules/blog/blog.route';
import { ContactRoutes } from './app/modules/contact/contact.route';
import { ExperianceRoutes } from './app/modules/experiance/experiance.route';
import { AuthRoutes } from './app/modules/auth/user.route';

const app: Application = express();
//json parser
app.use(express.json());

// cors

app.use(cors({ origin: '*' }));

// application routes
app.use('/api/v1/project', ProjectRoutes);
app.use('/api/v1/blog', BlogRoutes);
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/contact', ContactRoutes);
app.use('/api/v1/experiance', ExperianceRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Working...');
});

export default app;
