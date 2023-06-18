import axios from 'axios';

export const getNews = async () => {

    const url = '';
    try {
        await axios.get(url);
    }
    catch (error) {
        console.log('Error While Calling The News API', error);
    }

}