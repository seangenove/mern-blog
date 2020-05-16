import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import AddExperience from './components/experience/AddExperience';
import AddEducation from './components/education/AddEducation';
import Profiles from './components/profile/Profiles';
import Profile from './components/profile/Profile';

import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utilities/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Route exact path='/' component={Landing} />
                <section className="container">
                    <Alert />
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/profiles' component={Profiles} />
                        <Route exact path='/profile/:id' component={Profile} />

                        <PrivateRoute exact path='/dashboard' component={Dashboard} />
                        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                        <PrivateRoute exact path='/add-experience' component={AddExperience} />
                        <PrivateRoute exact path='/add-education' component={AddEducation} />
                        
                    </Switch>
                </section>
            </Router>
        </Provider>
    )
};

export default App;
