import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MainContainer } from '../../constants/mainContainer'
import Button from '@material-ui/core/Button'
import { goToImagesListPage, goToLoginPage } from "../../routes/coordinator"
import { Header, Title, DivButton } from "./styled"

const ImageDetailsPage = () => {

    const history = useHistory()

    const { id } = useParams()

    const [image, setImage] = useState({})

    useEffect(() => {
        getImageById()
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(history)
    }

    const getImageById = async () => {
        try {
            const image = await axios.get(`https://backend-fullstack-labenu.herokuapp.com/image/${id}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setImage(image.data)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <MainContainer>
            <Header>
                <Title>{image.subtitle}</Title>
                <DivButton>
                    <Button type="submit" variant="contained" color="primary" onClick={() => goToImagesListPage(history)}> lista </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={() => logout()}> logout </Button>
                </DivButton>
            </Header>
            <h3>{image.subtitle}</h3>
            <img src={image.file} />
        </MainContainer>
    )
}

export default ImageDetailsPage

