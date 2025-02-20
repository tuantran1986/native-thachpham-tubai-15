// 1. sử dụng - thư viện - "INVERSIFY"
import { Container } from 'inversify';
import UserService from '../services/UserService';

// 2. tạo container
// CÁCH 2 = "DEPENDENCIES ENJECTION" : chỉ sử dụng "1 NEW" = "1 INSTANCE"
const container = new Container();

// 3. gắn INSTALL vào CONTAINER = từ khóa - "BIND"
container.bind<UserService>('UserService').toConstantValue(new UserService());

export default container;