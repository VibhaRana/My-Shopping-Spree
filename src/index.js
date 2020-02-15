import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import MainPage from './components/Welcome';
import './styles/styles.scss';

ReactDOM.render(<MainPage />, document.getElementById('root'));


serviceWorker.unregister();
