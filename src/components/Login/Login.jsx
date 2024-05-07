import s from "./Login.module.css"
import React from 'react';
import { Formik } from 'formik';
import {login} from "./../Redux/auth-reducer"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  email: yup.string().required('Заполни Осел').email('Invalid email address'),
  password: yup.string().required('OSEL')
})

const Login = () => {
  const captcha = useSelector((state) => state.auth.captcha)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()
 if(isAuth) {
  return <Navigate to={"/profile"}/>
 }
 console.log(captcha)
 return <div>
  
    <h1>Enter login</h1>
    <Formik
    validationSchema={validationSchema}
      initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        const {email,password,username, captcha} = values
       // dispatch(login(values.email, values.password, values.rememberMe))
        dispatch(login(email,password,username, captcha))
        //console.log(values)
          // alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
     
      }}
    >
      {({
        values,
        isValid,
        setValues,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            //value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
           // value={values.password}
            placeholder='password'
          />  
          <input
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.checkbox}
          />
         <div> { captcha && <img src={captcha} className={s.captcha}/> }</div>
          
         <div> { captcha &&  <input
            type="text"
            name="captcha"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Symbol from image'
          />   }</div>
          
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} >
            Войти
          </button>
        </form>
      )}
    </Formik>
  </div>
}

export default Login;