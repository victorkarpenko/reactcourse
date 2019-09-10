import React from 'react';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        debugger;
        if(!this.props.initialized){
            return <Preloader/>
        } else return (
                <div className="App">
                    <HeaderContainer/>
                    <NavbarContainer/>

                    <div className="main">
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
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

export default compose(
    withRouter,
    connect(MapStateToProps, {initializeApp})
)(App);