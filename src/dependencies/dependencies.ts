// 2.4. sử dụng - thư viện - "INVERSIFY"
import { Container } from 'inversify';
import UserService from '../services/UserService';
import { PostClient } from '../networking/Post/PostClient';
// 2.5 tạo container
// CÁCH 2 = "DEPENDENCIES ENJECTION" : chỉ sử dụng "1 NEW" = "1 INSTANCE"
const container = new Container();
// 2.6 gắn INSTALL vào CONTAINER = từ khóa - "BIND"
container.bind<UserService>('UserService').toConstantValue(new UserService());
container.bind<PostClient>('PostClient').toConstantValue(new PostClient());

export default container;