import React, { Component } from 'react'
import UserItem from './UserItem';

class Users extends Component {
	render() {
    const { users } = this.props;
		return (
			<div style={userStyle}>
				{users.map(user => (
					<UserItem user={user} key={user.id} />
				))}
			</div>
    )
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}

export default Users
