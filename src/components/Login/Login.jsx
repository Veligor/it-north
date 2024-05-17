import s from "./Login.module.css"
import React from 'react';
import { Formik } from 'formik';
import {login} from "./../Redux/auth-reducer"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import * as yup from 'yup'
import {natureForm} from "./../../photo/images/natureForm.jpg"

const validationSchema = yup.object().shape({
  email: yup.string().required('Заполните поле email').email('Invalid email address'),
  password: yup.string().required('Заполните поле пароля')
})

const Login = () => {
  const captcha = useSelector((state) => state.auth.captcha)
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()
 if(isAuth) {
  return <Navigate to={"/profile"}/>
 }

 return <div className={s.form}>
  
   
    <Formik
    validationSchema={validationSchema}
      initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
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
         <div className={s.enter}>
         <h1>Login</h1>
         <div className={s.inputBox}>
         <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='login'
            //value={values.email}
          />
          <img className={s.icon} src="https://icons.veryicon.com/png/o/miscellaneous/safe-and-rational-drug-use-operation-icon/user-input.png"/>
         </div>
          {errors.email && touched.email && errors.email}
         <div className={s.inputBox}>
         <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
           // value={values.password}
            placeholder='password'
          />  
           <img className={s.icon} src="https://cdn-icons-png.flaticon.com/512/1580/1580796.png"/>
         </div>

         <div className={s.rememberMe}>
         <label>
         <input
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.checkbox}
          />Remember me
         </label>
         </div>
        {errors.password && touched.password && errors.password}
          <div className={s.buttonBox}>
          <button type="submit" disabled={isSubmitting} className={s.button}>
            Login
          </button>
          </div>
         
         </div>
         <div> { captcha && <img src={captcha} className={s.captcha}/> }</div>
          
         <div> { captcha &&  <input
            type="text"
            name="captcha"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Symbol from image'
          />   }</div>
          
          
         
        </form>
      )}
    </Formik>
  </div>
}

export default Login;