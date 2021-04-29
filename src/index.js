/**
 * Esta es la forma de crear elementos y pasarle texto sin utilizar React
 */
// const element = document.createElement('h1')
// element.innerText = 'Hello without React';

// const container = document.getElementById('app');

// container.appendChild(element);

/**
 * Forma con React
 */

import React from 'react'; // sera el analogo a createElement()
import ReactDOM from 'react-dom'; // Sera el analogo a appendChild()

const element = <h1>Hello with React app</h1>;
const container = document.getElementById('app');

ReactDOM.render(element, container); // Toma dos argumentos, que queremos renderizar y el segundo es donde lo queremos renderizar
