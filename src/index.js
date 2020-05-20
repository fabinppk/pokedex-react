import React from 'react';
import ReactDOM from 'react-dom';
import '_styles/style.scss';
import Routes from '_routes/routes';

ReactDOM.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>,
    document.getElementById('root')
);
