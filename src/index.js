import React from 'react'; // sera el analogo a createElement()
import ReactDOM from 'react-dom'; // Sera el analogo a appendChild()
import Badge from './components/Badge'



const container = document.getElementById('app');


ReactDOM.render(<Badge/>, container);
