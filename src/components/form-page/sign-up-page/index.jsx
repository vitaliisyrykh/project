 import React, { Component}from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import {SIGN_IN_SCHEMA} from '../../../utils/validation-schemas'

 const SignUP = props => {
  
  const defaultValues = {
    email: '',
    password: '',
    name: '',
    nikName: '',
    confirmPassword: '',

  }
  
  const onSubmit = (value, formikBag) => {
    console.log(value)
    console.log(formikBag)
  }
   
  
  return(
     <section>
       <Formik initialValues={defaultValues} validationSchema={SIGN_IN_SCHEMA} onSubmit={onSubmit}>
       {formProps => {
        return (
          <Form>
            <Field name='firstName' placeholder='First Name' />
            <ErrorMessage component='span' name='name' />

            <Field name='lastName' placeholder='Last Name' />
            <ErrorMessage component='span' name='name' />

            <Field name='nikName' placeholder='Display Name' />
            <ErrorMessage component='span' name='nikName' />
            
            <Field name='email' placeholder='Email'/>
            <ErrorMessage name='email' component='span'/>

            <Field name='password' type='password' placeholder='Password'/>
            <ErrorMessage component='span' name='password' />
            
            <Field name='' type='password' placeholder='Confirm Password'/>
            
            <Field type='submit' value='LOGIN' />
          </Form>
        )
      }}
       </Formik>
     </section>
   )
 }

 export default SignUP;