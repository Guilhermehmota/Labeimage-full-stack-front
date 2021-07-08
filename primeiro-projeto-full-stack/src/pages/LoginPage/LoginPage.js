import React from "react"
import useUnProtectedPage from '../../hooks/useUnprotectedPage'
import useForm from '../../hooks/useForm'
import { useHistory } from "react-router"
import {MainContainer} from '../../constants/mainContainer'

const initialForm = {
    email: "",
    password: "",
}

const LoginPage = () => {
    // useUnProtectedPage()
    const [form, onChange, clear] = useForm(initialForm);
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        clear();
    };

    return (
        <MainContainer>
            <h1>Login</h1>
            <form onSubmit={handleClick}>
                <input
                    required
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="text"
                />
                <input
                    required
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                />
                <div>
                    <button>
                        Fazer login
                    </button>
                </div>
            </form>
        </MainContainer>
    )
}

export default LoginPage