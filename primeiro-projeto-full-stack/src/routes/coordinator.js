export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/signup")
}

export const goToCreateImagePage = (history) => {
    history.push("/")
}

export const goToImagesListPage = (history) => {
    history.push("/imagens")
}

export const goToImageDetailsPage = (history, id) => {
    history.push(`/detalhes/${id}`)
}