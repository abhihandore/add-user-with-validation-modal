import React from 'react';
import styles from './Overlay.module.css';

const Overlay = props => {
    return <div onClick={props.onClick} className={styles.backdrop} />;
}

export default Overlay;