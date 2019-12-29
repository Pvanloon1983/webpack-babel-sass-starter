import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';
import { user } from './class';

import '../../dist/assets/css/main.css';
import '../../dist/index.html';

console.log('index filee');
addTitle('Hi There!!!!!!');
styleBody();
console.log(contact);

const premUsers = getPremUsers(users);

console.log(users, premUsers);

console.log(user.sayHello());
