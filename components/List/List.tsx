import React from 'react'
import ListItem from '../ListItem/ListItem'
import { User } from '../../pages/user'

type Props = {
    users: User[];
}

const List = ({ users }: Props) => {
    return (
        <ul>
            {users.map((user, index) => (
               <ListItem key={index} user={user} />
            ))}
        </ul>
    )
}

export default List;
