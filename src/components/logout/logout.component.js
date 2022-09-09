import { useRouter } from 'next/router'
import {
    ModalContent,
    ContainerLogout
} from './logout.styled.component'
const Logout = () => {
    const router = useRouter()

    const _logOut = () => {
        localStorage.clear()
        router.push('/login')
    }

    return (
        <ContainerLogout>
            <ModalContent>
                <div>
                    <p>Log Out ?</p>
                </div>
                <div>
                    <button onClick={()=> _logOut()}>Yes</button>
                    <button>No</button>
                </div>
            </ModalContent>
        </ContainerLogout>
    )
}
export default Logout