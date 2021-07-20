import React from "react"
import useUnProtectedPage from '../../hooks/useUnprotectedPage'
import useForm from '../../hooks/useForm'
import { useHistory } from "react-router"
import { MainContainer } from '../../constants/mainContainer'
import { Title, InitialForm, DivInputs, Header, DivButton, LoginTitle } from "./styled"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from "axios"
import { goToLoginPage, goToSignUpPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/url"

const initialForm = {
    email: "",
    password: "",
}

const LoginPage = () => {
    useUnProtectedPage()

    const [form, onChange, clear] = useForm(initialForm);
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        login()
        clear();
    };

    const login = async () => {

        const body = {
            email: form.email,
            password: form.password
        }

        try {
            const token = await axios.post(`${BASE_URL}/users/login`, body)
            window.localStorage.setItem('token', token.data.accessToken)
            history.push("/")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <MainContainer>
            <Header>
                <Title onClick={() => goToLoginPage(history)}> Labeimage </Title>
                <DivButton>
                    <Button type="submit" variant="contained" color="primary" onClick={() => goToSignUpPage(history)}> Cadastre-se</Button>
                </DivButton>
            </Header>
            <LoginTitle>Login</LoginTitle>
            <InitialForm onSubmit={handleClick}>
                <DivInputs>
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
                        label="senha"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        type="password"
                    />
                </DivInputs>
                <Button type="submit" variant="contained" color="primary">
                    Fazer login
                </Button>
            </InitialForm>
        </MainContainer>
    )
}

export default LoginPage