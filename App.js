import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import ModuleRoutes from './Kanbas/modules/routes.js';
import CourseRoutes from './Kanbas/courses/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import { mongoose } from 'mongoose';
import UserRoutes from './Kanbas/Users/routes.js';
import session from 'express-session';
import 'dotenv/config';

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
// mongoose.connect(CONNECTION_STRING);
mongoose.connect(process.env.DB_CONNECTION_STRING);
// mongoose.connect('mongodb://127.0.0.1:27017/kanbas');
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  })
);
app.use(express.json());
// const sessionOptions = {
//   secret: 'any string',
//   resave: false,
//   saveUninitialized: false,
// };
// app.use(session(sessionOptions));
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);
