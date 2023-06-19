import { data } from './constants/data.js'
import news from './models/news.js';

const DefaultData = async () => {

    try {
        await news.insertMany(data);
        console.log('Data uploaded successfully');
    }
    catch (error) {

        console.log('Error', error.message);
    }

}

export default DefaultData;