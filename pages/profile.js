import Layout from '../components/Layout';
import styled from "styled-components";
import {Button} from 'antd'
import { useUser } from '../utils/auth/useUser'

const Padding = styled.div`
  max-width: 70vw;
  min-height: 30vh;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
`
const Title = styled.h1`
  text-align: center;
`

const Profile = (props) => {
    const {user, logout} = useUser()

    if(!user) return <Layout><div>Loading Profile...</div></Layout>
    console.log('profile', user)
    return (
        <div>
            <Layout>
            <Title>My Profile</Title>
            <Padding>
                <div>{user.email}</div>
                <div>{user.id}</div>
                <Button onClick={() => logout()}>Not you? Click here</Button>
            </Padding>
            </Layout>
        </div>
    )
  }
  
  export default Profile