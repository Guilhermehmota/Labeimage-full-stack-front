import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MainContainer } from '../../constants/mainContainer'
import Button from '@material-ui/core/Button'
import { goToImagesListPage, goToLoginPage } from "../../routes/coordinator"
import { Header, Title, DivButton, DivDetails, Image, DivInfos, Colection, Tags } from "./styled"

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
                <Title onClick={() => goToImagesListPage(history)}>Labeimage</Title>
                <DivButton>
                    <Button type="submit" variant="contained" color="primary" onClick={() => goToImagesListPage(history)}> lista </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={() => logout()}> logout </Button>
                </DivButton>
            </Header>
            <DivDetails>
                <h1>{image.subtitle}</h1>
                <Image src={image.file} />
                <DivInfos>
                    <p><b>Autor:</b> Guilherme Mota</p>
                    <p><b>Criada em:</b> 14/07/2021</p>
                </DivInfos>
                <Colection>
                    <p><b>Coleção:</b> Viagens</p>
                </Colection>
                <Tags>
                    <p><b>Tags:</b> Tag1, Tag2, Tag3</p>
                </Tags>
            </DivDetails>
        </MainContainer>
    )
}

export default ImageDetailsPage

