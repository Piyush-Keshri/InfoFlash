import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();


const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

DefaultData();