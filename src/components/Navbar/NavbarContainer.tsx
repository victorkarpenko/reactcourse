import {connect} from "react-redux";
import Navbar from "./navbar";
import {AppStateType} from "../../redux/store";
import {FriendType} from "../../types/types";

type PropsType = {
   friends: Array<FriendType>
}

const mapStateToProps = (state: AppStateType): PropsType =>{
    return {
        friends: state.sidebar.friends
    }
};

const NavbarContainer = connect<PropsType, {}, {}, AppStateType>(mapStateToProps, {})(Navbar);

export default NavbarContainer;