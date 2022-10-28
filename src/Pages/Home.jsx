import '../styles/Home..css' 
import {Container, Button} from 'react-bootstrap' 
import Enjoy  from '../Components/Enjoy' 
import FrequentAsk from '../Components/FrequentAsked' 
import {useNavigate} from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate() 

return (
    <div> 
        <Container className="nav_top">

            <img 
            onClick={() => navigate('/')} 
             src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" className="logo"/> 
            <Button 
            onClick={() => navigate('/signin')}
            variant="danger" className="sign_btn">Sign In</Button>
         </Container>


        <div className="image_container">
          <img  
          className="netflix_image"
          alt="brand"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/254f24c6-cb47-4af1-a32e-843ad4566b26/ZA-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          /> 
        </div>  

        <Container className="unlimited">
          <h1 className="outer" style={{color: "white"}}>Unlimited movies, TV<h1 className="nested">shows,and more</h1></h1> 
          <h6 className="watch_anywhere" style={{color: "white"}}>Watch anywhere. Cancel anytime.</h6> 
        </Container>
         
         <div className="get_started">
            <Button 
            onClick={() => navigate("/signup")}
             variant="danger" className="btn_start">Get Started</Button>
         </div> 
        
         <Enjoy/> 
         <FrequentAsk/>

    </div>
)
} 

export default Home