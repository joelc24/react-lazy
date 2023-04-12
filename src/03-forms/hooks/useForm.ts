import { ChangeEvent, FormEvent, useState } from "react"

export const useForm = <T>(initialData: T) => {
    const [formData, setFormData] = useState(initialData)

    const onChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        console.log(formData)
    }

    const resetForm = () =>{
        setFormData({...initialData})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  return {
    // Properties
    ...formData,
    formData,
    // Methods
    onChange,
    onSubmit,
    resetForm,
    isValidEmail
  }
}
