import * as React from "react";
import c from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import * as axios from "axios";

class Users extends React.Component{

    componentDidMount() {
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pagesNumbers = [];
        for (let i=1; i<=pagesCount; i++){
            pagesNumbers.push(i);
        }
        return(
            <div>
                <div className={c.pagination}>
                    {pagesNumbers.map(p => <span onClick={() => {this.onPageChanged(p)}} className={this.props.currentPage===p ? c.pagination__link_active + ' ' + c.pagination__link : c.pagination__link}>{p}</span> )}
                </div>
                <div className={c.users}>
                    {
                        this.props.users.map(u => <div className={c.user} key={u.id}>
                            <div className={c.user__left}>
                                <img className={c.user__avatar} src={u.photos.small !== null ? u.photos.small : avatar} alt=""/>
                                {u.followed ?  <button onClick={()=>{this.props.unfollow(u.id)}} className={c.user__button}>Unfollow</button> :  <button onClick={()=>{this.props.follow(u.id)}} className={c.user__button}>Follow</button>}
                            </div>
                            <div className={c.user__center}>
                                <div className={c.user__fullname}>{u.name}</div>
                                <div className={c.user__status}>{u.status}</div>
                            </div>
                            <div className={c.user__right}>
                                {/*u.location.country}, {u.location.city*/}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        );
    }
}

export default Users;