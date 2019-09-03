import * as React from 'react';
import c from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode:false
    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
    };

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div className={c.userProfile__status}><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                    :
                    <div className={c.userProfile__status}><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/></div>
                }
            </div>
        );
    };

}

export default ProfileStatus;