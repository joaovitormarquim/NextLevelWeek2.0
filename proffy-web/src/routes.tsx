import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeachersList} />
                <Route path="/give-classes" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;