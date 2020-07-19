import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home-page';
import AddPost from './pages/add-post';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';
import Error from './pages/error';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/post" component={AddPost} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile/:userId" component={Profile} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
};

export default Navigation;