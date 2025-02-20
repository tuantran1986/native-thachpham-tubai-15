import axios from 'axios';
import { Post } from '../model/Post';

export function fetchPosts() {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            res.data.forEach(elm => {
                console.log("-------------------");
                console.log(elm);
            });
        })
        .catch(err => {
            console.log('loi call api: ', err);
        })
}