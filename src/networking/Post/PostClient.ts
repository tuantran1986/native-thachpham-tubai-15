import { Post } from "../../model/Post";
import { ApiClient } from "../ApiClient";

// 2.3 - kế thừa từ - ApiClient
export class PostClient extends ApiClient {
    // ENDPOINT = BASE_URL + PATH = https://jsonplaceholder.typicode.com/posts
    fetchPosts() {
        this.axiosInstance.get<Post[]>('/posts')
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
}