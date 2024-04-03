import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
const app = express();
Lab5(app);
Hello(app);
app.listen(4000);

// const express = require('express');
// const app = express();
// app.get('/hello', (req, res) => {
//   res.send('Life is good!');
// });
// app.get('/', (req, res) => {
//   res.send('Welcome to Full Stack Development!');
// });
// app.listen(4000);
