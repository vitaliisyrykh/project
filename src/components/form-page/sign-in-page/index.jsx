import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { SIGN_IN_SCHEMA } from '../../../utils/validation-schemas'
import styles from './sign-in-page.module.scss';

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
      {formProps => {
        return (
          <section className={styles.containerSignIn}>
          <h1 className={styles.headingSignIn}>LOGIN TO YOU ACCOUNT</h1>
          <Form >
            <div className={styles.containerFormSignIn}>
              <div className={`${styles.inputSignIn} ${styles.inputContainer}`}>
                <Field name='email' placeholder='Email' />
                <ErrorMessage component='' name='email' />
              </div>
              <div className={`${styles.inputSignIn} ${styles.inputContainer}`}>
                <Field name='password' type='password' placeholder='Password'/>
                <ErrorMessage component='span' name='password' />
              </div>
              <div className={`${styles.inputSignIn} ${styles.inputContainer} ${styles.submit}`}>
                <Field type='submit' value='LOGIN' />
              </div>
            </div>
          </Form>
          </section>
        )
      }}
    </Formik>
  )
}


export default FormSignIn
