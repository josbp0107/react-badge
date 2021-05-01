import React from 'react'; // sera el analogo a createElement()
import ReactDOM from 'react-dom'; // Sera el analogo a appendChild()
import 'bootstrap/dist/css/bootstrap.css'; // importar bootstrap


import './global.css'; // importar archivo css
import Badge from './components/Badge'; // Para importar un componente



const container = document.getElementById('app');


ReactDOM.render(<Badge/>, container);
