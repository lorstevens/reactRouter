import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'; //this is a reset

import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import Help from '../components/Help';
import Edit from '../components/Edit';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={ExpenseDashboard}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit" component={Edit}/>
            <Route path="/help" component={Help}/>
            <Route component={NotFound} />
         </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;