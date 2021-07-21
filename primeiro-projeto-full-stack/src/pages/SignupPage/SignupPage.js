import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom";
import useForm from '../../hooks/useForm'
import { MainContainer } from '../../constants/mainContainer'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Title, Header, InitialForm, DivInputs, SignUpTitle, DivButton } from "./styled"
import { goToLoginPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";

const initialForm = {
    name: "",
    email: "",
    nickname: "",
    password: "",
}

const SignUpPage = () => {
    const [form, onChange, clear] = useForm(initialForm);
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault()
        signup()
        clear()
    }

    const signup = async () => {

        const body = {
            name: form.name,
            email: form.email,
            nickname: form.nickname,
            password: form.password
        }

        try {
            const token = await axios.post(`${BASE_URL}/users/signup`, body)
            window.localStorage.setItem('token', token.data.accessToken)
            history.push("/")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <MainContainer>
            <Header>
                <Title onClick={() => goToLoginPage(history)}>Labeimage</Title>
                <DivButton>
                    <Button type="submit" variant="contained" color="primary" onClick={() => goToLoginPage(history)}> Login</Button>
                </DivButton>
            </Header>
            <SignUpTitle>Cadastro</SignUpTitle>
            <InitialForm onSubmit={handleClick}>
                <DivInputs>
                    <TextField
                        required
                        label="Nome de usuário"
                        name="name"
                        value={form.name}
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