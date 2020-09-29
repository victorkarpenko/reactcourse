import * as React from "react";
import {useSelector} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {
    getIsFetching,
} from "../../redux/users-selectors";
import Users from "./Users";

const UsersPage: React.FC = (props) => {
    const isFetching = useSelector(getIsFetching);

    return (
        <>
            {isFetching ?
                <Preloader/>
                :
                ''
            }

            <Users/>
        </>
    );
};

export default UsersPage