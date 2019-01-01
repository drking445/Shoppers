import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Nav from './NavBar';

const Routes = () => (
    <main>
        <Nav/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
        </Switch>
    </main>
)


export default Routes;
