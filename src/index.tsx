import React from 'react';
import ReactDOM from 'react-dom';

import './style/base.css';

import AppRouter from './views/router';

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);
