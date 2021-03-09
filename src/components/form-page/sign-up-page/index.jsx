 import React from 'react';
 import { Formik, Field, Form, ErrorMessage} from 'formik';
 import {SIGN_IN_SCHEMA} from '../../../utils/validation-schemas';
 import styles from './sign-up-page.module.scss';
 import Input from '../Input';
 import RadioButton from '../Radio-btns';

 const SignUP = props => {
  
  const defaultValues = {
    email: '',
    fistName: '',
    lastName: '',
    nikName: '',
    password: '',
    confirmPassword: '',
    role:'',

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
                  <div className={styles.inputContainer}>
                    <Field name='firstName'  type='text'>
                      {fieldProps=><Input {...fieldProps} placeholder='First Name'/>}
                    </Field>
                  </div>  

                  <div className={styles.inputContainer}>
                    <Field name='lasttName' type='text'>
                      {fieldProps=><Input {...fieldProps} placeholder='Last Name'/>}
                    </Field>
                  </div >

                  <div className={styles.inputContainer}>
                    <Field name='nikName' type='text'>
                      {fieldProps=><Input {...fieldProps} placeholder='Display Name'/>}
                    </Field>
                  </div >  
                    
                  <div className={styles.inputContainer}>
                    <Field name='email' type='email'>
                      {fieldProps=><Input {...fieldProps} placeholder='Email'/>}
                    </Field>
                  </div>  
                    
                  <div className={styles.inputContainer}>
                    <Field name='password' >
                      {fieldProps=><Input {...fieldProps} placeholder='Password' type='password'/>}
                    </Field>
                  </div>

                  <div className={styles.inputContainer}>
                    <Field name='passwordConfirmation' >
                      {fieldProps=><Input {...fieldProps} placeholder='Confirm Password' type='password'/>}
                    </Field>
                  </div>

                  <RadioButton 
                  name='role' 
                  value = 'buyer' 
                  discriptionHeading = 'Join as a Buyer'
                  discriptionSpan = 'I am looking for a Name, Logo or Tagline for my busisness, brand or product '
                  />
                  
                  <RadioButton 
                    name='role' 
                    value = 'creative'
                    discriptionHeading='Join as a Create or Market Place'
                    discriptionSpan = 'I plan to submit name ideas,Logo designs or sell names in Domaine Markerplace Seller'
                    />
                    <ErrorMessage name='role'/>
                  
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