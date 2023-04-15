import { Formik, Form } from "formik";
import { MySelect, MyTexInput } from "../components";
import formJSON from '../data/custom-form.json'
import "../styles/styles.css";
import * as Yup from 'yup';

const initialValues: {[key:string]: any} = {}
const requiredFileds: {[key:string]: any} = {}

for (const input of formJSON) {
    initialValues[input.name] = input.value

    if (!input.validations) {
        continue
    }

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Requerido')
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Este campo debe contener minimo ${(rule as any).value || 2}`)
        }

        if (rule.type === 'email') {
            schema = schema.email('El formato de email es incorrecto')
        }
    }


    requiredFileds[input.name] = schema

}

const validationSchema = Yup.object({...requiredFileds})

const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={(values)=> console.log(values)}
            validationSchema={validationSchema}
        >
            {
                ()=>(
                    <Form>
                        { formJSON.map(({ type, name, placeholder, label, options }) => {
                            
                            if (type === 'input' || type === 'password' || type === 'email') {
                                
                                return <MyTexInput 
                                            key={name}
                                            name={name} 
                                            label={label} 
                                            type={type as any} 
                                            placeholder={placeholder}
                                        /> 
                            }else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map(({id, label})=> (
                                                <option key={id} value={id}>{label}</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }

                            throw new Error(`El type: ${type} no es soportado`);
                            

                        }) }
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}

export default DynamicForm