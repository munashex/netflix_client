import '../styles/signin.css'
import {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {useMutation, gql} from '@apollo/client'
import {Spinner} from 'react-bootstrap'

const REGISTER_MUTATION = gql` 
mutation SignUp($name: String!, $email: String!, $password: String!) {
  signUp(input: {name: $name, email: $email, password: $password}){
    token
    user {
      name 
      id 
      email
    }
  }
}
`

const SignUp = () => {  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const [register, {data, loading, error}] = useMutation(REGISTER_MUTATION) 

 useEffect(() => { 
  if(error) {
    alert(error.message)
  }
 }, [error])

  if(data) {
    localStorage.setItem("token", data.signUp.token)
    navigate('/signin')
  }


 

    return (
        <div className="signIn_container"> 

          <div className="inner_container">
           <img 
           onClick={() => navigate('/')}
           src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="login" 
           className="netflix_logo"
           />  
           <h3 className="signIn" style={{color: "white"}}>Sign Up</h3>
          </div> 

          <div className="inputs"> 

          <input  
          onClick={(e) => setName(e.target.value)}
           placeholder="name" className="input" required/> 
           <input  
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email" className="input" require type="email"/>
            
           <input  
            onChange={(e) => setPassword(e.target.value)}
           placeholder="enter your password" className="input" required type="password"/>

           
          <Button  
          onClick={() => register({variables: {name: name, email: email, password: password}})}
          variant="danger" className="btn_signin"> 
          {loading ?<Spinner animation="border" variant="dark" />: "Sign Up"}
          </Button>
          </div>
           
          
        </div>
    )

}

export default SignUp