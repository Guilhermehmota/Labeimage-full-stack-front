import React from "react"
import { useHistory } from "react-router-dom";
import useForm from '../../hooks/useForm'
import {MainContainer} from '../../constants/mainContainer'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Title, InitialForm, DivInputs } from "./styled"

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
            <Title>Cadastro</Title>
            <InitialForm onSubmit={handleClick}>
            <DivInputs>
                <TextField
                    required
                    label="Nome de usuário"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    type="text"
                
                />
                <TextField
                    required
                    label="E-mail"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="text"
                
                />
                <TextField
                    required
                    label="Apelido"
                    name="nickname"
                    value={form.nickname}
                    onChange={onChange}
                    type="text"
                
                />
                <TextField
                    required
                    label="senha"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                />
                
                </DivInputs>
                    <Button type="submit" variant="contained" color="primary"> Cadastrar </Button>
            </InitialForm>
        </MainContainer>
    )
}

export default SignUpPage