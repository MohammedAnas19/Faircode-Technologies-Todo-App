import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../components/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, register} from '../actions';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

const Signup = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth);
  const history = useHistory();


  const validate = Yup.object({

    mobileNumber: Yup.string()
      .max(10, 'Must be valid Mobile Number')
      .min(10, 'Must be valid Mobile Number')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })

  useEffect(()=>{
    dispatch(isUserLoggedIn());
    if (user.authenticated) {
      history.push("")
    }
  })

  return (
    <Formik
      initialValues={{
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        dispatch(register(values));
        history.push("");
      }}
    >
      {formik => (
        <div className="form-container">
          <h1 className="my-4 font-weight-bold display-4">Sign Up</h1>
          <Form>
            <TextField label="Mobile Number" name="mobileNumber" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}


export default Signup;