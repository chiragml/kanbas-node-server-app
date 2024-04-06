import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import ModuleRoutes from './Kanbas/modules/routes.js';
import CourseRoutes from './Kanbas/courses/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);
