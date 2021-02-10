import Layout from '../../components/Layout';
import styled from "styled-components";
import {Button} from 'antd'
import Info from "../../components/InfoForm";
import { useUser } from '../../utils/auth/useUser'
import styles from './profile.module.css'

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
  @media(max-width: 768px) {
    display: block;
  }
`
const Title = styled.h1`
  text-align: center;
`
const Padding = styled.div`
  padding: 1rem;
`

const pickColor = name => {
  if(typeof String(name) !== 'string') return '#777'
  let hex = String(name).match(/[0-9|a-f]/g) || []
  let len = hex.length 
  if(len > 3) hex = hex.concat(['7','7']).join('').slice(0,6)
  if(len === 3) hex = hex.join('')
  if(len < 3) hex = hex.concat(['','','','']).join('7').slice(0,3)
  return '#' + hex
 }

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
                className={styles.pic}
                style={{borderRadius: '100%', background: pickColor(nickname), padding: '1rem'}}
                height='250px' width='250px'
                src={user.providerData[0].photoUrl || `https://avatars.dicebear.com/api/bottts/${nickname}.svg`} 
                  />
                <div className={styles.email} data-id={user.id}>
                  <strong style={{fontSize: '1.25rem'}}>{user.email}</strong> <span>{user.emailVerified ? '(verfied)' : '(unverified)'}</span>
                </div>
                <div style={{textTransform: 'capitalize'}}>
                  {user.providerData[0].displayName ? 'Name: '+user.providerData[0].displayName : 'Handle: '+name}
                </div>
                <div className={styles.join}>Joined: {user.metadata.creationTime}</div>
                <div className={styles.login}>Logged in at: {user.metadata.lastSignInTime}</div>
                <div className={styles.phone}>Phone: {user.providerData[0].phoneNumber || 'not provided'}</div>
            </Grid>
            <Padding>
              <Info 
                title={'Additional Info'} 
                content={'Feel free to add your name and LinkedIn Account URL to your profile! Also tell us about some of your hobbies and interests, so class project topics can be personalized for you!'} />
            </Padding>
            </Layout>
        </div>
    )
  }
  
  export default Profile