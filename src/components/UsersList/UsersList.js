import React from 'react';
import UserItem from './UserItem';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
    console.log(props.usersList);
    return (
        <Card className={styles.users}>
            <ul>
                {
                props.usersList.map( (user) => {
                    return <UserItem 
                        key={user.id} 
                        id={user.id}
                        username={user.username}
                        age={user.age}
                    />
                })
                }
            </ul>
        </Card>
        
    )
}

export default UsersList;