import React, {useRef} from 'react';
import Button from '../UI/Button';
import styles from './NewUserForm.module.css';

const NewUserForm = (props) => {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    /**
     * * The problem with the below approach is that, on every keyup/on every keypress, state changes.
     * * So , on every state change, respective component renders. Hence Ref came into the picture.
     * * We only need the data from input's when we are submitting the form. 
     * * So here we don't need to track an every keypress or any state.
     * * Hence we used 'useRef' here. It minized the code drastically.
     */
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmitForm({
            username : usernameInputRef.current.value,
            age: ageInputRef.current.value,
            id: Math.random().toString()
        });
        usernameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    /** ---------------------------------------------------------------------------------------
     * ! Here we are using state to manage the input data
     * ! using useState, we are taking input value on every keyup or on every input change 
    const [formData, setFormData] = useState({
        username : '',
        age: '',
    });
    const inputChangeHandler = (event) => {
        setFormData( (prevData) => {
            return {
                ...prevData,
                [event.target.name] : event.target.value 
            }
        });
    }
    * ! And on the Form Submit, i'm using this state changed values to share with parent component.
    * ! and then remove the previously entered data with setState.
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
    ------------------------------------------------------------------------------------------- */
   
    return (
        <form action="#" onSubmit={formSubmitHandler} > 
            <fieldset className={`${styles.fieldset}`}>
                <div className={`${styles.field}`} >
                    <label className={`label`} htmlFor="username">Username</label>
                    <div className="control">
                        <input id="username" 
                        type="text" 
                        className="input-field text-field" 
                        name="username" 
                        ref={usernameInputRef}
                        /** 
                        * ! Remove this attributes, because, now we are not managing the state or not tracaking every keypress. 
                        onInput={inputChangeHandler} 
                        value={formData.username} 
                        */
                        /> 
                    </div>
                </div>
                <div className={`${styles.field}`} >
                    <label className={`label`} htmlFor="age">Age (Years)</label>
                    <div className="control">
                        <input id="age" 
                        type="number" 
                        className="input-field num-field" 
                        name="age" 
                        ref={ageInputRef}
                        /* 
                        onInput={inputChangeHandler} 
                        value={formData.age} 
                        */
                        /> 
                    </div>
                </div>
                <div className="action-toolbar">
                    <Button 
                    type="submit" 
                    className="btn btn-primary add-user"
                    >Add User</Button>
                </div>
            </fieldset>
        </form>
    )
}
export default NewUserForm;