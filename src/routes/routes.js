import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from '_pages/index';
import Erro from '_pages/erro';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route component={Erro} />
            </Switch>
        </Router>
    );
}
