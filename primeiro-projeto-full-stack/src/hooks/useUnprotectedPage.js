import { useLayoutEffect } from 'react'
import { useHistory } from 'react-router'
import { goToCreateImagePage } from '../routes/coordinator'

const useUnProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(token){
            goToCreateImagePage(history)
        }
    }, [history])
}

export default useUnProtectedPage