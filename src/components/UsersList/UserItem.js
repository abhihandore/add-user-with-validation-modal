import React from 'react';
import styles from './UserItem.module.css';

const UserItem = (props) => {
    console.log(props.id);
    return (
        <li key={props.id} className={styles['user-item']} >
            <span>{props.username} ({props.age} Years of age)</span>
        </li>
    )
}

export default UserItem;