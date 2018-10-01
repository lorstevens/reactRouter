
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'; //this is a reset
import './styles/styles.scss'




ReactDOM.render(<AppRouter/>, document.getElementById('app'));

