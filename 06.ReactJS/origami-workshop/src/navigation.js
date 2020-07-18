import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home-page';
import AddPost from './pages/add-post';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/post" component={AddPost} />
            </Switch>
        </BrowserRouter>
    )
};

export default Navigation;