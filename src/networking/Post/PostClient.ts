import { AxiosResponse } from "axios";
import { Post } from "../../model/Post";
import { ApiClient } from "../ApiClient";

// 2.3 - kế thừa từ - ApiClient
export class PostClient extends ApiClient {
  // --- TH1: call api - with "RETURN PROMISE"
  // ENDPOINT = BASE_URL + PATH = https://jsonplaceholder.typicode.com/posts
  fetchPostsPromise() {
    return this.axiosInstance.get<Post[]>("/posts"); // PROMISE
  }

  // --- TH2: call api - with "CALLBACK"
  // ENDPOINT = BASE_URL + PATH = https://jsonplaceholder.typicode.com/posts
  fetchPostsWithCallback(cb: (params: Post[]) => void) {
    this.axiosInstance
      .get<Post[]>("/posts")
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          cb(res.data);
        }
      })
      .catch((err) => {
        console.log("loi call api: ", err);
      });
  }
}
