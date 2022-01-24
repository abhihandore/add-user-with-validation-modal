import React from 'react';
import Card from '../UI/Card';
import NewUserForm from './NewUserForm';
import styles from './NewUser.module.css';

const NewUser = (props) => {
    const onSubmitFormHandler = (formData) => {
        const {username, age} = formData;
        /**
        for(let [key, value] of Object.entries(formOnlyFields)) {
            if(value.trim().length === 0){
                
                setIsValid( (prevData) => {
                    return {
                        ...prevData,
                        [key] : false,
                        hasError : true
                    }
                })
            }
        }
         */
        
        if(username.trim().length === 0 || age.trim().length === 0){
            props.onGettingError({
                errorTitle   : 'Invalid input',
                errorMessage : 'Please enter valid username and age [Non-empty values].',
                button       : 'Ok'
            })
            return;
        }
        if(+age.trim() < 1){
            props.onGettingError({
                errorTitle   : 'Invalid Age',
                errorMessage : 'Please enter Valid age ( > 1).',
                button       : 'Ok'
            })
            return;
        }

        props.onAddUserData(formData);
    }
    return (
        <Card className={`${styles['new-user-wrapper']}`}>
            <NewUserForm 
            onSubmitForm={onSubmitFormHandler} 
            />
        </Card>
    )
}
export default NewUser;