import React ,{useEffect}from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../components/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {isUserLoggedIn, login} from '../actions';
import { useHistory } from "react-router-dom";


const Signin = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth);
  const history = useHistory();

  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
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
        email: '',
        password: '',
        
      }}
      validationSchema={validate}
      onSubmit={values => {
        dispatch(login(values));
        history.push("")
      }}
    >
      {formik => (
        <div className="form-container">
          <h1 className="my-4 font-weight-bold display-4">Sign In</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Login</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>

  )
}


export default Signin;