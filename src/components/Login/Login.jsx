//  import React from "react";
// import { CustomForm } from "./Form";
// import s from "./Login.module.css"
// // const LoginForm = (props) => {
// //   return (
// //     <form>
// //       <div>
// //         <input placeholder={"login"} />
// //       </div>
// //       <div>
// //         <input placeholder={"password"} />
// //       </div>
// //       <div>
// //         <input type={"checkbox"} /> remember me
// //       </div>
// //       <div>
// //         <button>Login</button>
// //       </div>
// //     </form>
// //   );
// // };
// // const Login = (props) => {
// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <LoginForm />
// //     </div>
// //   );
// // };




// // export default Login;

// // Render Prop


// const Login = () => {
  
//   return (
//     <div className={s.block}>
//       <CustomForm />
//     </div>
//   )
// }
// export default Login;


import React from 'react';
import { Formik } from 'formik';

const Login = () => (
  <div>
    <h1>Enter login</h1>
    <Formik
      initialValues={{ email: '', password: '',  }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
          // alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
     
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <input
            type="checkbox"
            name="checkbox"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.checkbox}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;