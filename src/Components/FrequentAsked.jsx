import {Accordion} from 'react-bootstrap'
import '../styles/Accordin.css' 
import data from '../data/data'

const FrequentAsk = () => {
    


    return (
        <div className="accordin_container"> 
         <h3 style={{color: 'white'}} className="asked_questions">Frequently Asked</h3> 
         <br/>
        {
         data && data.map((item) => {
            return (
                <Accordion variant="dark" className="accordion">
                    <Accordion.Item eventKey={item.id} bg="dark"> 
                     <Accordion.Header>{item.name}</Accordion.Header> 
                     <Accordion.Body>{item.description}</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
         })
        }
        </div>
    )
}

export default FrequentAsk