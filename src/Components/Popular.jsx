import React from 'react'
import '../styles/Popular.css'
import popular from '../data/movie';


const Popular = () => {
return(
    <div className="popular_container">
    <h4 className="popular" style={{color: "white", marginLeft: 12}}>Popular</h4>
       <div className='demo'>
       {
        popular.map((item) => {
            return (
                <div key={item.id}> 
                  <a href="https://netflix.com">
                  <img src={item.img} className="popular_image" 
                  />
                  </a>
                </div>
            )
        })
    }
       </div>
    </div>
)
}

export default Popular