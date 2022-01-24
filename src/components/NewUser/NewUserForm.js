import React, {useState} from 'react';
import Button from '../UI/Button';
import styles from './NewUserForm.module.css';

const NewUserForm = (props) => {
    const [formData, setFormData] = useState({
        username : '',
        age: '',
    });
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmitForm({
            ...formData,
            id: Math.random().toString()
        });
        setFormData({
            username : '',
            age: '',
        })
    }
    const inputChangeHandler = (event) => {
        setFormData( (prevData) => {
            return {
                ...prevData,
                [event.target.name] : event.target.value 
            }
        });
    }
    return (
        <form action="#" onSubmit={formSubmitHandler} > 
            <fieldset className={`${styles.fieldset}`}>
                <div className={`${styles.field}`} >
                    <label className={`label`} htmlFor="username">Username</label>
                    <div className="control">
                        <input id="username" type="text" className="input-field text-field" name="username" onInput={inputChangeHandler} value={formData.username} /> 
                    </div>
                </div>
                <div className={`${styles.field}`} >
                    <label className={`label`} htmlFor="age">Age (Years)</label>
                    <div className="control">
                        <input id="age" type="number" className="input-field num-field" name="age" onInput={inputChangeHandler} value={formData.age} /> 
                    </div>
                </div>
                <div className="action-toolbar">
                    <Button type="submit" className="btn btn-primary add-user">Add User</Button>
                </div>
            </fieldset>
        </form>
    )
}
export default NewUserForm;