import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignupPage'
import CreateImagePage from '../pages/CreateImagePage/CreateImagePage'
import ImagesListPage from '../pages/ImagesListPage/ImagesListPage'
import ImageDetailsPage from '../pages/ImageDetailsPage/ImageDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
                <Route exact path="/criar">
                    <CreateImagePage />
                </Route>
                <Route exact path="/">
                    <ImagesListPage />
                </Route>
                <Route exact path="/detalhes/:id">
                    <ImageDetailsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router