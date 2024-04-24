import s from "./Input.module.css"
import { Field, ErrorMessage as Error } from "formik"

export const Input = ({id, label, name, placeholder}) => {
   return <div className={s.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <Field name={name} id={id} placeholder={placeholder} />
      <Error name={name}>{(error) => <span>{error}</span>}</Error>
   </div>
}