import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom';
import './src/index.css';
import App from './src/app';
const app = (
    <HashRouter>
        <App />
    </HashRouter>
);
ReactDOM.render(app,document.getElementById('root'));