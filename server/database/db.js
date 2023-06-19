import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connection = async () => {
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;

    const url = `mongodb+srv://${username}:${password}@infoflash.g8cl3y3.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    }
    catch (error) {
        console.log('Error while Connecting The Database', error);
    }

}

export default Connection;
