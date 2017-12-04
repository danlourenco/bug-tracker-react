import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
<BrowserRouter>
  <App />
</BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
