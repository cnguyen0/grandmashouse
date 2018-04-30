import React from 'react';
import Typography from 'material-ui/Typography';

class UserAvatarProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.user.img} style={{borderRadius: '50%', width: '150px'}} alt='common connection avatar'/>
                <Typography>{this.props.user.first_name + ' ' + this.props.user.last_name}</Typography>
            </div>
        )
    }
}

export default UserAvatarProfile