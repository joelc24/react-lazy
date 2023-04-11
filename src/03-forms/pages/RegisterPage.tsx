import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {

    const { name, email, password1, password2, onChange, onSubmit, resetForm } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

  return (
    <div>
        <h1>RegisterPage</h1>

        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="name"
                name='name'
                value={name}
                onChange={onChange}
                className='has-error'
            />
            <span>Este campo es necesario</span>
            <input 
                type="email" 
                placeholder="email"
                name='email'
                value={email}
                onChange={onChange}
            />
            <input 
                type="password" 
                placeholder="password1"
                name='password1'
                value={password1}
                onChange={onChange}
            />
            <input 
                type="password" 
                placeholder="Repeat password"
                name='password2'
                value={password2}
                onChange={onChange}
            />

            <button type="submit"> Guardar </button>
            <button type="button" onClick={resetForm}> Reset Form </button>
        </form>
    </div>
  )
}

export default RegisterPage