import axios from 'axios';

export default async(number) =>{
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
        const post= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
        return {response, post};
        }
    catch (error) {
        return error;
    }   
}