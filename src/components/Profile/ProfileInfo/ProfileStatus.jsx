import * as React from 'react';
import c from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        userStatus: this.props.userStatus
    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updStatus(this.state.userStatus);
    };

    onStatusChange = (e) => {
        const status = e.target.value;
        this.setState({userStatus: status});
    };

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div className={c.userProfile__status}><span onDoubleClick={this.activateEditMode}>{this.props.userStatus ? this.props.userStatus : 'Double click to change status'}</span></div>
                    :
                    <div className={c.userProfile__status}><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus}/></div>
                }
            </div>
        );
    };

}

export default ProfileStatus;