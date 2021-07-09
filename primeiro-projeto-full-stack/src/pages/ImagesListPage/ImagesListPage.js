import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import {MainContainer} from '../../constants/mainContainer'
import useProtectedPage from "../../hooks/useProtectedPage"
import Button from '@material-ui/core/Button'
import { goToCreateImagePage, goToImageDetailsPage } from "../../routes/coordinator"

const ImagesListPage = () => {
    useProtectedPage()

    const history = useHistory()

    const [images, setImages] = useState([])

    useEffect(() => {
        getAllImages()
    },[])

    const getAllImages = async() => {
        try {
            const images = await axios.get(`https://backend-fullstack-labenu.herokuapp.com/image/all`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setImages(images.data)

        } catch (error) {
            alert(error.message)
        }
    }

    const imagesList = images && images.map((image) => {
        return(
            <div>
                <h3>{image.subtitle}</h3>
                <img src={image.file} onClick={() => goToImageDetailsPage(history, image.id)}/>
            </div>
        )
    })

    return (
        <MainContainer>
            <Button type="submit" variant="contained" color="primary" onClick={() => goToCreateImagePage(history)}> criar </Button>
            <h1>ImagesListPage</h1>
            {imagesList}
        </MainContainer>
    )
}

export default ImagesListPage