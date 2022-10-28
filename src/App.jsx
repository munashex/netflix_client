import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home' 
import SignIn from './Pages/Signin'
import SignUp from './Pages/signUp'
import client from './graphql/apollo' 
import Movies from './Pages/Movies'
import {ApolloProvider} from '@apollo/client'




const App = () => {

  return (
    <ApolloProvider client={client}>
       <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="signin" element={<SignIn/>}/> 
      <Route path="signup" element={<SignUp/>}/> 
      <Route path="movies" element={<Movies/>}/>
    </Routes>
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App