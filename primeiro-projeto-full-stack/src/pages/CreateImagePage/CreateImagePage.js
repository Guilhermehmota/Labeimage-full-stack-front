import React from "react"
import { MainContainer } from '../../constants/mainContainer'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToImagesListPage, goToLoginPage } from "../../routes/coordinator"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { DivInputs, Header, InitialForm, Title, DivButton, CreateImageTitle } from "./styled"

const initialForm = {
    subtitle: "",
    file: "",
    tags: "",
    collection: "",
}

const CreateImagePage = () => {

    useProtectedPage()

    const [form, onChange, clear] = useForm(initialForm);

    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault()
        // createImage()
        clear()
    }

    const logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(history)
    }

    // const createImage = async() => {

    //     const body = {
    //         subtitle: form.subtitle,
    //         file: form.file,
    //         tags: form.tags,
    //         collection: form.collection,
    //     }
    //     try {

    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    return (
        <MainContainer>
            <Header>
                <Title onClick={() => goToImagesListPage(history)}>Labeimage</Title>
                <DivButton>
                    <Button type="submit" variant="contained" color="primary" onClick={() => goToImagesListPage(history)}> voltar </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={() => logout()}> logout </Button>
                </DivButton>
            </Header>
            <CreateImageTitle>Crie sua imagem</CreateImageTitle>
            <InitialForm onSubmit={handleClick}>
                <DivInputs>
                    <TextField
                        required
                        label="Título"
                        name="subtitle"
                        value={form.subtitle}
                        onChange={onChange}
                        type="text"

                    />
                    <TextField
                        required
                        label="Link"
                        name="file"
                        value={form.file}
                        onChange={onChange}
                        type="text"

                    />

                    <TextField
                        required
                        label="Tags da imagem"
                        name="tags"
                        value={form.tags}
                        onChange={onChange}
                        type="password"
                    />
                    <TextField
                        required
                        label="Coleção"
                        name="collection"
                        value={form.collection}
                        onChange={onChange}
                        type="text"
                    />


                </DivInputs>
                <Button type="submit" variant="contained" color="primary"> Criar imagem </Button>
            </InitialForm>
        </MainContainer>
    )
}

export default CreateImagePage