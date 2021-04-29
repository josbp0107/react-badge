import React from 'react'; // sera el analogo a createElement()
import ReactDOM from 'react-dom'; // Sera el analogo a appendChild()

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

const name = 'Jose';
const jsx = <h1>Hello with React app, Soy {name}</h1>;
//const element = React.createElement('a', {href: 'http://google.com'}, 'Ir a google')
const element = React.createElement('h1', {}, `Hola, soy ${name}`)

// Otra forma para no utilizar React.createElement()
const element_two = (
    <div>
        <h1>Esta es una prueba</h1>
        <p>Este es un parrafo</p>
    </div>
)
const container = document.getElementById('app');
const container_two = document.getElementById('prueba')

ReactDOM.render(jsx, container); // Toma dos argumentos, que queremos renderizar y el segundo es donde lo queremos renderizar
ReactDOM.render(element_two,container_two)