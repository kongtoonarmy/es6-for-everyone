import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { 
    apiKey as key, 
    url, 
    sayHi, 
    old, 
    dog 
} from './src/config';

import User, {createURL, gravatar  } from './src/user'; 

const user = new User('Kongyot', 'kongtoonarmy@hotmail.com', 'kongyot.com');
const profile = createURL(user.name);  
console.log(profile);   

const image = gravatar(user.email);
console.log(image);
 