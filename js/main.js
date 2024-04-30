// import './utils';
// import './data';
// import './miniatures';

import {ELEMENTS_AMOUNT, getMiniature} from './miniatures';


const miniatures = Array.from({length: ELEMENTS_AMOUNT}, () => getMiniature());

// eslint-disable-next-line no-console
console.log(miniatures);
