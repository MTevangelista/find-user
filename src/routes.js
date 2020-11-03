import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '../src/pages/Landing'
import Home from '../src/pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes