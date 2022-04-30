import '../../App.css';
import picture from '../../profile-image2.jpg'
import {FaPhoneSquareAlt} from 'react-icons/fa'


function Index() {
    return (
        <div className='introduction main'>
            <div className="intro-texts">
                
                <h1>"Hello World", </h1>
                <p className='white-text'>I am Monika, a <strong>fullstack developer</strong></p>
                <span className="phone-link white-text">
                    <a href="tel:7412095299" className="phone-link white-text">
                        <FaPhoneSquareAlt color="black" style={{fontSize: '1.5rem'}}/>
                        07412095299
                    </a>
                </span>
                
                
            </div>
            
            
            <img src={picture} alt="" className='profile-image'/>
            
            
        </div>
    )
}

export default Index;