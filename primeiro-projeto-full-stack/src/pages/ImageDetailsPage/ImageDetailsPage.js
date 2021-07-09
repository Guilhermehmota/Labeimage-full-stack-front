import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import {MainContainer} from '../../constants/mainContainer'
import Button from '@material-ui/core/Button'
import { goToImagesListPage } from "../../routes/coordinator"

const ImageDetailsPage = () => {

    const history = useHistory()

    const {id} = useParams()

    const [image, setImage] = useState({})

    useEffect(() => {
        getImageById()
    }, [])

    const getImageById = async () => {
        try{
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
            <Button type="submit" variant="contained" color="primary" onClick={() => goToImagesListPage(history)}> lista </Button>
            <h1>ImageDetailsPage</h1>
            <h3>{image.subtitle}</h3>
            <img src={image.file}/>
        </MainContainer>
    )
}

export default ImageDetailsPage