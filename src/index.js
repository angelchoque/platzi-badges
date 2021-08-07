import React from 'react'; // analogo a createElement
import ReactDOM from 'react-dom'; // añadir un elemnto, appendchild
import 'bootstrap/dist/css/bootstrap.css'

import './globals.css'
// import Badge from './components/Badge'
// import BadgeNew from './pages/badgeNew'
// import Badges from './pages/Badges'
import App from './components/App'

const container = document.querySelector('#app');

// const element = <h1>Hello, Platzi Badges</h1>; //JSX importar react
// ReactDOM.render(element, container); //renderizar (elemento a añadir, donde se va a añadir)
// al reactdm render hay que darle un elemento, por eso se cierra con braquets
// ReactDOM.render(< Badge firstName="angeli" lastName="pacom" />, container)

// ReactDOM.render(< BadgeNew />, container)
ReactDOM.render(< App />, container)

// props son argumentos a una funcion - en este caso son los atributos de nuestro componente