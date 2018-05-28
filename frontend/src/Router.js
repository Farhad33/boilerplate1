import React from 'react'
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Dashboard from './components/dashboard/Dashboard';
import { AuthRoute, ProtectedRoute } from './router_util';


const Router = () => (
	<Switch>
		<AuthRoute exact path="/" component={Homepage} />
		<ProtectedRoute exact path="/dashboard" component={Dashboard} />
	</Switch>
)


export default Router;
