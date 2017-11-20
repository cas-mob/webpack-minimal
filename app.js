import { print } from './printer';
import APPLICATION_VERSION, { Author } from './version';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('printer').innerHTML = print('Hello CAS!!');
    document.getElementById('version').innerHTML = 'v' + APPLICATION_VERSION;
    document.getElementById('author').innerHTML = Author;
});