import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Nav from './NavBar';
import Sell from './Sell'
import Buy from './Buy';

const Routes = () => (
    <main>
        <Nav/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/sell' component={Sell}/>
            <Route exact path='/buy' component={Buy}/>
        </Switch>
    </main>
)


export default Routes;
