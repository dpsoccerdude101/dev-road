import { useState } from 'react'
import FirebaseAuth from '../components/FirebaseAuth'

const Auth = () => {
  const [isNew, setIsNew] = useState(false)
  const status = ['Sign in', 'Sign up']
  return (
    <>
      <h2 style={{textAlign: 'center'}}>{status[Number(isNew)]}:</h2>
      <br />
      <div>
        <FirebaseAuth />
      </div>
      <a 
      style={{textAlign: 'center', display: 'block', margin: '1rem 0 0 220px'}} 
      href="#" 
      onClick={() => setIsNew(!isNew)}>
        {status[Number(!isNew)]}
      </a>
    </>
  )
}

export default Auth
