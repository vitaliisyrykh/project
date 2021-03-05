import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Field, ErrorMessage } from 'formik';
import styles from './Input.module.scss';

const Input = fieldProps => {
  console.log(fieldProps);
  const{field, meta,type, ...rest} = fieldProps;
  
   const classNames = cx(
    [styles.inputContainer], 
    {[styles.validInput]: meta.touched && !meta.error},
    {[styles.unvalidInput]: meta.touched && meta.error}) 
  
  
  return (
    
      <label className={classNames}>
        <input {...field}  {...rest} type={type} />
        <ErrorMessage component='span' name={field.name} />
      </label>
    
  )
}

export default Input;