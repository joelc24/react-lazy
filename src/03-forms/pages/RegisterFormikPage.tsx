import { Formik, Form,  } from "formik";
import { MyTexInput } from "../components";
import * as Yup from 'yup';

import '../styles/styles.css'

const RegisterFormikPage = () => {
  
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values, actions) => {
                    console.log(values)
                    actions.resetForm()
                    actions.setSubmitting(false)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                             .min(2,'El nombre debe conetener minimo dos caracteres')
                             .max(15,'El nombre debe ser menor de 15 caracteres')
                             .required('Requerido'),
                    email: Yup.string()
                              .email('El correo no tiene un formato valido')
                              .required('Requerido'),
                    password1: Yup.string()
                                  .min(6,'La contraseña debe contener minimo 6 caracteres')
                                  .required('Requerido'),
                    password2: Yup.string()
                                  .oneOf([Yup.ref('password1')],'Las contraseñas no coinciden')
                                  .required('Requerido')
                })}
            >
                {({ handleReset, isSubmitting }) => (

                    <Form>
                        <MyTexInput name="name" label="Nombre" />
                        <MyTexInput name="email" label="Correo" type="email"/>
                        <MyTexInput name="password1" label="Contraseña" type="password"/>
                        <MyTexInput name="password2" label="Repetir Contraseña" type="password"/>
                        <button type="submit"> { isSubmitting ? 'Guardando..' : 'Guardar'} </button>
                        <button type="button" onClick={handleReset}> Reset Form </button>
                    </Form>
                )

                }

            </Formik>
        </div>
    )
}

export default RegisterFormikPage