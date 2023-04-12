import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string
    name: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    [x:string]: any
}

export default function MyTexInput({ label, ...props }: Props) {
    const [field] = useField(props)

  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
        <ErrorMessage name={props.name} component="span"/>
    </>
  )
}
