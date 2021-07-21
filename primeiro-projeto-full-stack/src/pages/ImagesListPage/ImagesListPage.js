import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { MainContainer } from '../../constants/mainContainer'
import useProtectedPage from "../../hooks/useProtectedPage"
import Button from '@material-ui/core/Button'
import { goToCreateImagePage, goToImagesListPage, goToLoginPage } from "../../routes/coordinator"
import ImageCard from "../../components/ImageCard/ImageCard";
import { Main, Header, Title, DivButton, DivCreateImage } from "./styled"
import { BASE_URL } from "../../constants/url"

const ImagesListPage = () => {
    
    useProtectedPage()
    const history = useHistory()
    
    const [images, setImages] = useState([])
    
    useEffect(() => {
        getAllImages()
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(history)
    }

    const getAllImages = async () => {
        try {
            const images = await axios.get(`${BASE_URL}/images/all`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setImages(images.data.images)

        } catch (error) {
            console.log(error.message)
        }
    }

    const imagesList = images && images.map((image) => {
        return (
            <ImageCard
                key={image.id}
                id={image.id}
                image={image.file}
                subtitle={image.subtitle}
            >
            </ImageCard>
        )
    })

    return (
        <MainContainer>
            <Header>
                <Title onClick={() => goToImagesListPage(history)} >Labeimage</Title>
                <DivButton>
                    <Button type="submit" variant="contained" color="primary" onClick={() => logout()}> logout </Button>
                </DivButton>
            </Header>
            <DivCreateImage>
                <Button type="submit" variant="contained" color="primary" onClick={() => goToCreateImagePage(history)}> adicionar uma nova imagem </Button>
            </DivCreateImage>
            <Main>
                {imagesList}
            </Main>
        </MainContainer>
    )
}

export default ImagesListPage