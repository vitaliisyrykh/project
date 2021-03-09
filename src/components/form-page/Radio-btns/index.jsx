import React from 'react';
import styles from './radio-btn.module.scss';

const RadioButton = props => {
  const {name, value, discriptionSpan,discriptionHeading}=props
  return(
    <div className={styles.radioContainer}>
        <label className = {styles.labelContainer}>
          <input name ={name} type='radio' value={value} />
          <h3>{discriptionHeading}</h3>
        </label>
          <span className = {styles.text}>{discriptionSpan}</span>
    </div>  
  )
}

export default RadioButton;