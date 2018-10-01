
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css'; //this is a reset
import './styles/styles.scss'


const ExpensifyDashboard = () => (
    <div>
        This is from my Dashboard
    </div>
);

const AddExpense = () => (
    <div>
        Add Expense
    </div>
);

const Edit = () => (
    <div>
        Edit Page
    </div>
);

const Help = () => (
    <div>
        Help Page
    </div>
);


const NotFound = () => (
    <div>
       404!
    </div>
);


const routes = (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={ExpensifyDashboard}/>
    <Route path="/create" component={AddExpense}/>
    <Route path="/edit" component={Edit}/>
    <Route path="/help" component={Help}/>
    <Route component={NotFound} />
    </Switch>
       
 
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));

