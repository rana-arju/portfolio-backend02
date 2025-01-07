import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProjectRoutes } from './app/modules/projects/project.route';

const app: Application = express();
//json parser
app.use(express.json());

// cors

app.use(cors());

// application routes
app.use('/api/v1/project', ProjectRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Working...');
});

export default app;
