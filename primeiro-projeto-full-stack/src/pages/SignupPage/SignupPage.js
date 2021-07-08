import React from "react"
import { useHistory } from "react-router-dom";
import useForm from '../../hooks/useForm'
import {MainContainer} from '../../constants/mainContainer'

const initialForm = {
    name: "",
    email: "",
    nickname:"",
    password: "",
}

const SignUpPage = () => {
    const [form, onChange, clear] = useForm(initialForm);
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault()
        clear()
    }

    return (
        <MainContainer>
            <h1>Cadastro</h1>
            <form onSubmit={handleClick}>
                <input
                    required
                    placeholder="Nome de usuário"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    type="text"
                
                />
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
                    placeholder="Apelido"
                    name="nickname"
                    value={form.nickname}
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
                    <button> Cadastrar </button>
                </div>
            </form>
        </MainContainer>
    )
}

export default SignUpPage