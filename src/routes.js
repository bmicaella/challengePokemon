import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Game from './pages/game'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={Game} path='/game' />
        </BrowserRouter>
    )
}

export default Routes;