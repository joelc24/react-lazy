import { Formik, Form } from "formik";
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTexInput, MyCheckbox, MySelect } from '../components'

const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('El correo no tiene un formato valido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                              .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                                .required('Requerido')
                                
                })}
            >

                {
                    (formik) => (
                        <Form noValidate>
                            <MyTexInput 
                                label="First Name" 
                                name="firstName"
                                placeholder="Joel"
                            />
                            
                            <MyTexInput 
                                label="Last Name" 
                                name="latstName"
                                placeholder="Camargo"
                            />

                            <MyTexInput 
                                label="Email" 
                                name="email"
                                type="email"
                                placeholder="correo@correo.com"
                            />

                            
                            
                            <MySelect name="jobType" label="Job Type">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">It Senior</option>
                                <option value="it-jr">It Junior</option>
                            </MySelect>
                            
                            <MyCheckbox label="Terms and Condition" name="terms"/>
                            
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}

export default FormikAbstraction