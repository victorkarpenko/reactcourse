import React, {Suspense} from 'react';
import './App.css';
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        } else return (
                <div className="App">
                    <HeaderContainer/>
                    <NavbarContainer/>

                    <div className="main">
                        <Route path='/dialogs' render={() => <Suspense fallback={<Preloader/>}><DialogsContainer/> </Suspense>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
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

            <HashRouter basename = {process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </HashRouter>

    )
};

export default MainApp