import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors'
import cron from 'node-cron'
import news from './models/news.js';

const app = express();

app.use(cors());
app.use('/', Route);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

DefaultData();

// Define the cron job to delete data every 12 hours
cron.schedule('0 */12 * * *', () => {
    // Delete data from the MongoDB collection
    news.deleteMany({}, (err) => {
        if (err) {
            console.error('Error deleting data:', err);
        } else {
            console.log('Data deleted successfully.');
        }
    });
});