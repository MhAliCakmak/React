import axios from 'axios';

export default async(number) =>{
    try {
        const {data:user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
        const {data:post}= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
        return {user, post};
        }
    catch (error) {
        return error;
    }   
}