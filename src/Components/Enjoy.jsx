import '../styles/Enjoy.css'

const Enjoy = () => { 

  

    return (
        <div className="enjoy_container"> 

          <div className="tv_stand">  
          <div className="enjoy_tv">
          <h2 style={{color: "white"}}>Enjoy on your TV</h2> 
          <h6 style={{color: "white"}}> on Smart TVs, Playstation, Xbox</h6>
          </div>
            
            <img  
             alt="netflix" 
             src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
             className="tv_stand_image"
            /> 

<video autoPlay loop className="netflix_video">
  <source src="netflixvideio.mp4" type="video/mp4"/>
  <source src="netflixvideio.mp4" type="video/ogg"/>
</video>
           
          </div> 

        </div>
    )
}

export default Enjoy