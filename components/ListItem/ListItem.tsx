import React from 'react'
import User from '../../pages/user'

type Props = {
    user: User;
}

const ListItem = ({ user }: User) => {
    return (
        <li key={user.id}>
            <p>User ID: {user.id}</p>
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
        </li>
    )
}

export default ListItem;
