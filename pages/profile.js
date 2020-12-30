import Layout from '../components/Layout';
import styled from "styled-components";
import {Button} from 'antd'
import Info from "../components/InfoForm";
import { useUser } from '../utils/auth/useUser'

const Grid = styled.div`
  max-width: 70vw;
  min-height: 30vh;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-areas: 'pic email'
                       'pic name'
                       'pic join'
                       'pic login'
                       'pic phone';
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: start;
  align-content: start;
`
const Title = styled.h1`
  text-align: center;
`
const Padding = styled.div`
  padding: 1rem;
`

const Profile = (props) => {
    const {user, logout} = useUser()

    if(!user) return <Layout><div>Loading Profile...</div></Layout>
    console.log('profile', user)
    const nickname = user.email.split('@')[0]
    const name = nickname.replaceAll(/[\W\d]/g, ' ')
    return (
        <div>
            <Layout>
            <Title>My Profile</Title>
            <Button style={{margin: '0 auto', display: 'block'}} onClick={() => logout()}>Not you? Click here</Button>
            <Grid>
                <img 
                className='pic'
                style={{borderRadius: '100%', background: 'steelblue', padding: '1rem'}}
                height='250px' 
                src={user.providerData[0].photoUrl || `https://avatars.dicebear.com/api/bottts/${nickname}svg`} 
                  />
                <div className='email' data-id={user.id}>
                  <strong style={{fontSize: '1.25rem'}}>{user.email}</strong> <span>{user.emailVerified ? '(verfied)' : '(unverified)'}</span>
                </div>
                <div style={{textTransform: 'capitalize'}}>
                  {user.providerData[0].displayName ? 'Name: '+user.providerData[0].displayName : 'Handle: '+name}
                </div>
                <div className='join'>Joined: {user.metadata.creationTime}</div>
                <div className='login'>Logged in at: {user.metadata.lastSignInTime}</div>
                <div className='phone'>Phone: {user.providerData[0].phoneNumber || 'not provided'}</div>
            </Grid>
            <Padding>
              <Info 
                title={'Provide Some Additional Info'} 
                content={'Feel free to add you name and LinkedIn Account URL to your profile! Also Tell us about some of you hobbies and interests, so class project topics can be personalized for you!'} />
            </Padding>
            </Layout>
        </div>
    )
  }
  
  export default Profile