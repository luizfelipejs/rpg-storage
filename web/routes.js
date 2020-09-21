import React from 'react';

import {Route, BrowserRouter, Redirect} from 'react-router-dom'

import {isAuth} from './services/auth'

import RegisterUser from './pages/RegisterUser';
import LogonUser from './pages/LogonUser';
import Profile from './pages/Profile';
import Adventure from './pages/Adventure';
import AdventureRegister from './pages/AdventureRegister';
import Landing from './pages/landing';
import EditAdventure from './pages/Edit adventure';



function PrivatedRoute ({component, path,...rest}) {
    if (isAuth() === true) {
        return <Route path={path} component={component} {...rest}/>
    } else {
        return <Redirect to="/" />
    }
}

export default function Routes () {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={LogonUser}/>
            <Route path="/register" component={RegisterUser}/>
            <PrivatedRoute path="/profile" component={Profile}/>
            <PrivatedRoute path="/Adventure/:id" component={Adventure} />
            <PrivatedRoute path="/Adventure-Register" component={AdventureRegister} />
            <PrivatedRoute path="/edit/:id" component={EditAdventure} />
        </BrowserRouter>
    )
}