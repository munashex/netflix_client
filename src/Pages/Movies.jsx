import {useEffect} from 'react' 
import { useNavigate } from 'react-router-dom'
import '../styles/Movies.css'
import Popular from '../Components/Popular'
import Trending from '../Components/Trending'
import {Button} from 'react-bootstrap'


const Movies = () => { 

    let navigate = useNavigate() 
    
    useEffect(() => {
      if(!localStorage.getItem('token')){
        navigate('/signin')
      }
    }, [])

    const signOut = () => {
      localStorage.clear() 
      navigate('/signin')
    }
    
    

    return (
        <div className="movie_container">  

            <div className="movie_trailer_container">
            <video  className="movie_trailer"  autoPlay loop >
          <source src="trailer.mp4" type="video/mp4"/>
          <source src="trailer.mp4" type="video/ogg"/>
          </video>
            </div> 
            
            <div className="top_nav"> 
              <img 
              src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
              className="netflix_log"
              /> 
               <Popular/> 
            </div>  
           
            <div className="logout">
              <Button onClick={signOut}  variant="danger">log out</Button>
              </div>
      
            
        </div>
    )
}

export default Movies