import FirebaseAuth from '../components/FirebaseAuth'

const Auth = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Signing in...</h2>
      <br />
      <div>
        <FirebaseAuth />
      </div>
    </div>
  )
}

export default Auth
