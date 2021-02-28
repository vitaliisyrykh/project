import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { SIGN_IN_SCHEMA } from '../../../utils/validation-schemas'
import styles from './sign-in-page.module.scss';

const FormSignIn = props => {
  const onSubmit = (value, formikBag) => {
    console.log(value)
    console.log(formikBag)
  }

  return (
    <Formik onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}>
      {formProps => {
        return (
          <section className={styles.containerSignIn}>
          <h1 className={styles.heading}>LOGIN TO YOU ACCOUNT</h1>
          <Form >
            <div className={styles.containerFormSignIn}>
              <div>
                <Field name='email' placeholder='Email' />
                <ErrorMessage component='span' name='email' />
              </div>
              <div>
                <Field name='password' type='password' placeholder='Password'/>
                <ErrorMessage component='span' name='password' />
              </div>
              <div>
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
FormSignIn.defaultProps = {
  email: '',
  password: ''
}

export default FormSignIn
