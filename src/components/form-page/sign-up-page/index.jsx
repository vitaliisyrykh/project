 import React, { Component}from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';

 const SignUP = props => {
  const onSubmit = (value, formikBag) => {
    console.log(value)
    console.log(formikBag)
  }
   
  
  return(
     <section>
       <Formik validationSchema={SIGN_IN_SCHEMA} onSubmit={onSubmit}>
       {formProps => {
        return (
          <Form>
            <Field name='name' placeholder='First Name' />
            <ErrorMessage component='span' name='name' />

            <Field name='name' placeholder='Last Name' />
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