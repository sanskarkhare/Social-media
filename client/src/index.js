import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css'
import DataProvider from './redux/store'
 

ReactDOM.render(
    <DataProvider>
        <App />
    </DataProvider>,
document.getElementById('root'));
