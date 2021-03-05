 import React, { Component}from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import {SIGN_IN_SCHEMA} from '../../../utils/validation-schemas';
 import styles from './sign-up-page.module.scss';
 import Input from '../Input';

 const SignUP = props => {
  
  const defaultValues = {
    email: '',
    fistName: '',
    lastName: '',
    nikName: '',
    password: '',
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
            <Form >
              <div className={styles.inputsContainer}>

                    <Field name='firstName'  type='text'>
                      {fieldProps=><Input {...fieldProps} placeholder='First Name'/>}
                    </Field>

                    <Field name='lasttName' type='text'>
                      {fieldProps=><Input {...fieldProps} placeholder='Last Name'/>}
                    </Field>
                    
                    <Field name='nikName' type='text'>
                      {fieldProps=><Input {...fieldProps} placeholder='Display Name'/>}
                    </Field>

                    <Field name='email' type='email'>
                      {fieldProps=><Input {...fieldProps} placeholder='Email'/>}
                    </Field>
                
                    <Field name='password' type='password'>
                      {fieldProps=><Input {...fieldProps} placeholder='Password'/>}
                    </Field>

                    <Field name='passwordConfirmation' type='password'>
                      {fieldProps=><Input {...fieldProps} placeholder='Confirm Password'/>}
                    </Field>
                
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