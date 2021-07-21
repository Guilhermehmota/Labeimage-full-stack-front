import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MainContainer } from '../../constants/mainContainer'
import Button from '@material-ui/core/Button'
import { goToImagesListPage, goToLoginPage } from "../../routes/coordinator"
import { Header, Title, DivButton, DivDetails, Image, DivInfos, Colection, Tags } from "./styled"
import { BASE_URL } from "../../constants/url"

const ImageDetailsPage = () => {

    const history = useHistory()

    const { id } = useParams()

    const [image, setImage] = useState({})

    const [author, setAuthor] = useState("")

    const [authorName, setAuthorName] = useState("")


    useEffect(() => {
        getImageById()
    }, [])

    useEffect(() => {
        if (author) {
            getAuthor()
        }
    }, [author])

    const logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(history)
    }

    const getImageById = async () => {
        try {
            const image = await axios.get(`${BASE_URL}/images/${id}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setImage(image.data.image)
            setAuthor(image.data.image.author)
        } catch (error) {
            alert(error.response.data.message)
        }
    }


    const getAuthor = async () => {
        try {
            const authorData = await axios.get(`${BASE_URL}/users/${author}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setAuthorName(authorData.data.name)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const newDate = image && image.date
    const splittedDate = image?.date && newDate.split("T")
    const correctedDate = splittedDate && splittedDate[0].split("-")
    const finalDate = correctedDate && `${correctedDate[2]}/${correctedDate[1]}/${correctedDate[0]}`

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
                    <p><b>Autor:</b> {authorName}</p>
                    <p><b>Criada em:</b> {finalDate}</p>
                </DivInfos>
                <Colection>
                    <p><b>Coleção:</b> {image.collection}</p>
                </Colection>
                <Tags>
                    <p><b>Tags:</b> {image.tags}</p>
                </Tags>
            </DivDetails>
        </MainContainer>
    )
}

export default ImageDetailsPage

