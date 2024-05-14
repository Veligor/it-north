import s from "./Login.module.css"
import React from 'react';
import { Formik } from 'formik';
import {login} from "./../Redux/auth-reducer"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import * as yup from 'yup'


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

 return <div>
  
    <h1>Вход ВКонтакте</h1>
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
         <div>
         <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='login'
            //value={values.email}
          />
         </div>
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
           // value={values.password}
            placeholder='password'
          />  
         <div>
         <input
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.checkbox}
          />Сохранить ввод
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
          
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} className={s.button}>
            Войти
          </button>
        </form>
      )}
    </Formik>
  </div>
}

export default Login;