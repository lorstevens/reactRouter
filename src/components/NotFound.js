import React from 'react';
import {  Link } from 'react-router-dom'


//using client-side rounting instead of server-side refresh
const NotFound = () => (
    <div>
       404! <Link to="/">Go Home</Link> 
    </div>
);

export default NotFound;
