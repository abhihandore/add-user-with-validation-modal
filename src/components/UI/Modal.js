import React from 'react';
import styles from './Modal.module.css';
import Button from './Button';
import Card from './Card';

const Modal = (props) => {
    return (
        <React.Fragment>
            <Card className={`${props.className} ${styles.modal} modal-view`} >
                <header className={`${styles.header} modal-header`}>
                    <h2>{props.includes.errorTitle}</h2>
                </header>
                <div className={`modal-content ${styles.content}`}>
                    {props.includes.errorMessage}
                </div>
                <footer className={`modal-footer ${styles.actions}`}>
                    <Button className="btn btn-primary close-modal" onClick={props.onOkClick}>{props.includes.button}</Button>
                </footer>
            </Card>
        </React.Fragment>
        
    );
}

export default Modal;