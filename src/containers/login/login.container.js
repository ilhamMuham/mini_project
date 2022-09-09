import { useState } from 'react'
import { useRouter } from 'next/router'
import {
    Header,
    CardLogin,
    PageLogin,
    FormLogin,
    InputLogin,
    LabelLogin,
    WarningText,
    ButtonLogin,
    ButtonRegister,
    ContainerButton,
} from './login.styled.container'
const Login = () => {
    const router = useRouter()

    const user = [{
        username : 'ilham',
        password : 'ilhammuham2713',
        token : '12411241khg4k3gi2kjg2u3523'
    },{
        username : 'joko',
        password : 'jokoyahya123',
        token : 'sldiglhsldihs9yfigw42jk232kj234'
    }]

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState(false)

    const _login = () => {
        let userLog = user.filter(e=> e.username == userName && e.password == password)
        console.log('userLog : ',userLog)
        console.log('userName : ',userName)
        console.log('password : ',password)
        if(userLog.length > 0) {
            setWarning(false)
            localStorage.setItem('token', userLog[0].token)
            router.push('/product')
        } else {
            setWarning(true)
        }
    }

    return (
        <PageLogin>
            <CardLogin>
                <Header>Login</Header>
                <FormLogin>
                    <LabelLogin htmlFor="uname"><b>Username</b></LabelLogin>
                    <InputLogin type="text" placeholder="Enter Username" name="uname" required onChange={(e)=>setUserName(e.target.value)}/>

                    <LabelLogin htmlFor="psw"><b>Password</b></LabelLogin>
                    <InputLogin type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>setPassword(e.target.value)}/>
                    {warning && <WarningText>Username or Password is incorrect</WarningText>}
                </FormLogin>
                <ContainerButton>
                    <ButtonLogin onClick={()=>_login()}>Login</ButtonLogin>
                    <ButtonRegister>Register</ButtonRegister>
                </ContainerButton>
            </CardLogin>
        </PageLogin>
    )
}
export default Login