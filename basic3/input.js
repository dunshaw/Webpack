const good = 'hello';

import img1 from './img/img1.jpg';
import img2 from './img/img2.png';
import './test.scss';

async function sayHello() {
  const result = await fetch(SERVICE_URL);
  console.log(result);
}

sayHello();