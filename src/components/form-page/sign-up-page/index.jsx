 import React, { Component}from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import {SIGN_IN_SCHEMA} from '../../../utils/validation-schemas';
 import styles from './sign-up-page.module.scss';

 const SignUP = props => {
  
  const defaultValues = {
    email: '',
    password: '',
    fistName: '',
    lastName: '',
    nikName: '',
    confirmPassword: '',

  }
  
  const onSubmit = (value, formikBag) => {
    console.log(value)
    console.log(formikBag)
  }
   
  
  return(
     
       <Formik initialValues={defaultValues} validationSchema={SIGN_IN_SCHEMA} onSubmit={onSubmit}>
       {formProps => {
        return (
          <section className={styles.containerSignUp}>
            <h2 className={styles.headingSignUp}>create an account</h2>
            <p className={styles.paragraph}>We always keep your name and email adress private.</p>
            <Form>
              <div className={styles.inputsContainer}>
                <div className={styles.inputContainer}>
                  <Field name='firstName' placeholder='First Name' />
                  <ErrorMessage component='span' name='name' />
                </div>

                <div className={styles.inputContainer}>
                  <Field name='lastName' placeholder='Last Name' />
                  <ErrorMessage component='span' name='name' />
                </div>

                <div className={styles.inputContainer}>
                  <Field name='nikName' placeholder='Display Name' />
                  <ErrorMessage component='span' name='nikName' />
                </div>
                
                <div className={styles.inputContainer}>
                  <Field name='email' placeholder='Email'/>
                  <ErrorMessage name='email' component='span'/>
                </div>
                
                <div className={styles.inputContainer}>                   
                  <Field name='password' type='password' placeholder='Password'/>
                  <ErrorMessage component='span' name='password' />
                </div>
                
                <div className={styles.inputContainer}>
                  <Field name='' type='password' placeholder='Confirm Password'/>
                </div>
                
                <div className={`${styles.inputContainer} ${styles.modifForSubmit} ${styles.widthModifSubmitConteiner}`}>
                  <Field type='submit' value='Create Account' />
                </div>
              </div>
            </Form>
          </section>
        )
      }}
       </Formik>
     
   )
 }

 export default SignUP;