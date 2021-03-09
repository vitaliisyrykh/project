import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-ZА-Я][a-zа-я]{1,64}$/, 'Enter a valid name')
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: Yup.string()
    .email('Email must be a valid email')
    .required(),
    
    firstName: Yup.string().matches(/^([a-z0-9_-]{3,15}$)/, 'Nik Name must be abc letter').required(),
    
    lastName: Yup.string().matches(/^([a-z0-9_-]{3,15}$)/, 'Nik Name must be abc letter').required(),
    
    nikName : Yup.string().matches(/^([a-z0-9_-]{3,15}$)/, 'Nik Name must be abc letter').required(),
    
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
        'Password must contain one big letter and so on....'
      ).required(),
    
    passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    
    role: Yup.string().oneOf([Yup.ref('role')],null).required(),

});