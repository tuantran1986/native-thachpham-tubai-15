import axios, { AxiosInstance } from 'axios';
export class ApiClient {
    // 2.1 - tao INSTANCE
    protected axiosInstance: AxiosInstance;
    // 2.2 - CONSTRUCTOR
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://jsonplaceholder.typicode.com",
            timeout: 10000,
        })
    }
}


// ========================== OLD ==========================
// import axios from 'axios';
// import { Post } from '../model/Post';

// export function fetchPosts() {
//     axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
//         .then(res => {
//             res.data.forEach(elm => {
//                 console.log("-------------------");
//                 console.log(elm);
//             });
//         })
//         .catch(err => {
//             console.log('loi call api: ', err);
//         })
// }
