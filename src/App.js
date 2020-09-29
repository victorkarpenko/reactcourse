import React, {Suspense} from 'react';
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersPage from "./components/Users/UsersPage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = (PromiseRejectionEvent) => {
        alert(PromiseRejectionEvent);
    };

    componentDidMount() {
        this.props.initializeApp();
        
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandlerejextion', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else return (
            <div className="App">
                <HeaderContainer/>
                <NavbarContainer/>

                <div className="main">
                    <Switch>

                        <Route path='/dialogs'
                               render={() => <Suspense fallback={<Preloader/>}><DialogsContainer/> </Suspense>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/users' render={() => <UsersPage/>}/>
                        <Redirect exact from="/" to="/profile" />
                        <Route path='*' render={() => <div className="error-page"><span>404</span> <div>not found</div></div>}/>

                    </Switch>

                </div>
            </div>
        );

    }
}

const MapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(MapStateToProps, {initializeApp})
)(App);

let MainApp = (props) => {
    return (

        <BrowserRouter >
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>

    )
};

export default MainApp