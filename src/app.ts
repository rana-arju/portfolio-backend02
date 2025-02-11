import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProjectRoutes } from './app/modules/projects/project.route';
import { BlogRoutes } from './app/modules/blog/blog.route';
import { ContactRoutes } from './app/modules/contact/contact.route';

const app: Application = express();
//json parser
app.use(express.json());

// cors

app.use(cors({ origin: '*' }));

// application routes
app.use('/api/v1/project', ProjectRoutes);
app.use('/api/v1/blog', BlogRoutes);
app.use('/api/v1/auth', BlogRoutes);
app.use('/api/v1/contact', ContactRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Working...');
});

export default app;
