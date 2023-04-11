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


  return {
    // Properties
    ...formData,
    formData,
    // Methods
    onChange,
    onSubmit,
    resetForm

  }
}
