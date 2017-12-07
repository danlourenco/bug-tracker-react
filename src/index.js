import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'bulma/css/bulma.css'
import './styles/index.css'

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
