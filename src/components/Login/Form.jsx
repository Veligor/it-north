import s from "./Form.module.css"
import { Formik, Form, Field } from 'formik';
import {initialValues} from "./InitialValues"
import { Input } from "./Input";

export const CustomForm = () => {
   return <Formik
   initialValues={initialValues}
   onSubmit={(values) => console.log('Yes', values)}
   >
      <Form className={s.form}>
         <Input label='Login' name='Login' id='Login' placeholder='Введите Login'/>
         <Input label='Email' name='Email' id='Email' placeholder='Введите Email'/>
         {/* <Input label='Email' name='Email' id='Email' placeholder='Введите Email' type="checkbox"/> */}
         
      </Form>
   </Formik>
}