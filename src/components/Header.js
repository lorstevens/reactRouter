import React from 'react';
import {  Link, NavLink } from 'react-router-dom'


const Header = () =>(
    <header>
        <h1>Expensify App</h1>
            <NavLink  exact to= "/" activeClassName="is-active" >Home</NavLink>
            <NavLink to ="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to= "/help" activeClassName="is-active">Help Me</NavLink>
          
    </header>
)

export default Header;
