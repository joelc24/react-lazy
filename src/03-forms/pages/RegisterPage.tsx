import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {

    const { name, email, password1, password2, onChange, onSubmit, resetForm, isValidEmail } = useForm({
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
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />
            {name.trim().length <= 0 && <span>Este campo es necesario</span>}
            <input 
                type="email" 
                placeholder="email"
                name='email'
                value={email}
                onChange={onChange}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {!isValidEmail(email) && <span>Email no es valido</span>}
            <input 
                type="password" 
                placeholder="password1"
                name='password1'
                value={password1}
                onChange={onChange}
                className={`${password1.trim().length <= 0 && 'has-error'}`}
            />
            {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password1.trim().length < 6 && password1.trim().length > 1 && <span>La contraseña debe de ser de 6 caracteres</span>}
            <input 
                type="password" 
                placeholder="Repeat password"
                name='password2'
                value={password2}
                onChange={onChange}
                className={`${password2.trim().length <= 0 && 'has-error'}`}
            />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>La contraseña debe de ser de 6 caracteres</span>}
            <button type="submit"> Guardar </button>
            <button type="button" onClick={resetForm}> Reset Form </button>
        </form>
    </div>
  )
}

export default RegisterPage