import React from "react"
import { useHistory } from "react-router-dom"
import { MainContainer } from '../../constants/mainContainer'
import { goBack } from "../../routes/coordinator"
import { DivButton, ErrorTitle, Header, Title } from "./styled"
import Button from '@material-ui/core/Button'

const ErrorPage = () => {

    const history = useHistory()
    return (
        <MainContainer>
            <Header>
                <Title onClick={() => goBack(history)}> Labeimage </Title>
                <DivButton>
                    <Button type="submit" variant="contained" color="primary" onClick={() => goBack(history)}> Voltar</Button>
                </DivButton>
            </Header>
            <ErrorTitle>Esta página não existe!</ErrorTitle>
        </MainContainer>
    )
}

export default ErrorPage