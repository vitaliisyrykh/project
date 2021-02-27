import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../../utils/validation-schemas';

const FormSignIn = props => {
  
  const onSubmit = (value, formikBag) => {
    console.log(value);
    console.log(formikBag);
  };

  return (
    <Formik onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}>
      {formProps=>{
        return(
          <Form>
            <Field name="email"/>
            <ErrorMessage component="span" name="email"/>
            
            <Field name="password" type="password"/>
            <ErrorMessage component="span" name="password"/>

            <Field type="submit" value="LOGIN"/>
          </Form>
        )
      }}
    </Formik>
  );
};
FormSignIn.defaultProps = {
  email: '',
  password: '',
};

export default FormSignIn;
