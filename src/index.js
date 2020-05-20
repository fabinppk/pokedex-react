import React from 'react';
import ReactDOM from 'react-dom';
import '_styles/style.scss';
import Routes from '_routes/routes';
import { Provider } from 'react-redux';
import store from '_redux/';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Routes />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
