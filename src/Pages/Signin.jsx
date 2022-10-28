import '../styles/signin.css'
import {Button, Spinner} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {useMutation, gql} from '@apollo/client' 
import { useNavigate } from 'react-router-dom'

const LOGIN_MUTATION = gql` 
mutation SignIn($email: String!, $password: String!) {
  signIn(input: {email: $email, password: $password}) {  
    token,
   user {
     name, 
     email
   }
  }
}

`


const SignIn = () => {  


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  

  const navigate = useNavigate()

  const [login, {data, loading, error}] = useMutation(LOGIN_MUTATION) 
 
 
 
  useEffect(() => {
    if(error) {
      alert(error.message)
    }
  }, [error])
  

  if(data) {
    localStorage.setItem('token',data.signIn.token)
    navigate('/movies')
  }



    return (
        <div className="signIn_container"> 

          <div className="inner_container">
           <img 
           onClick={() => navigate('/')}
           src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="login" 
           className="netflix_logo"
           />  
           <h3 className="signIn" style={{color: "white"}}>Sign In</h3>
          </div> 

          <div className="inputs">
          <input  
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email" className="input" require type="email"/>
            
           <input  
            onChange={(e) => setPassword(e.target.value)}
           placeholder="enter your password" className="input" required type="password"/>

         <Button  
          onClick={() => login({variables: {email: email, password: password}})}
          variant="danger" className="btn_signin"> 
          {loading ? <Spinner animation="border" variant="dark" />: "Sign In"}
          </Button>

          </div>
           
          
        </div>
    )

}

export default SignIn