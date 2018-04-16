import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
