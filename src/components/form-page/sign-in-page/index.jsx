import React from 'react';
import { Formik, Field, Form, } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validation-schemas';
import styles from './sign-in-page.module.scss';

import Input from '../Input';

const FormSignIn = props => {
  const defaultValues = {
    email: '',
    password: ''
  }
  
  const onSubmit = (value, formikBag) => {
    console.log(value)
    console.log(formikBag)
  }
  

  return (
    <Formik initialValues={defaultValues} onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}>
      
          <section className={styles.containerSignIn}>
          <h1 className={styles.headingSignIn}>LOGIN TO YOU ACCOUNT</h1>
          <Form >
            <div className={styles.containerFormSignIn}>
              <div className={`${styles.inputSignIn} ${styles.inputContainer}`}>
                <Field name={'email'}  >
                  {fieldProps => <Input {...fieldProps}   placeholder='Email'/>}
                </Field>
             </div>
             <div className={`${styles.inputSignIn} ${styles.inputContainer}`}>
                <Field name='password'  >
                  {fieldProps => <Input {...fieldProps}   placeholder='Password' type='password'/>}
                </Field>
             </div>
             <div>
               <label className={styles.remeberMe}>
                 <Field type="checkbox" name="remeber me"/>
                 Remember me
               </label>
             </div>
             <div className={`${styles.inputSignIn} ${styles.inputContainer} ${styles.submit}`}>
                <Field type='submit' value='LOGIN' />
              </div>
            </div>
          </Form>
          </section>
    
    </Formik>
  )
}


export default FormSignIn
