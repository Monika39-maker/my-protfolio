import 'C:/Users/vicky/OneDrive/Desktop/New folder/my-protfolio/src/App.css';
import picture from 'C:/Users/vicky/OneDrive/Desktop/New folder/my-protfolio/src/profile-image2.jpg'
import {FaPhoneSquareAlt} from 'react-icons/fa'


function Index() {
    return (
        <div className='introduction main'>
            <div className="intro-texts">
                
                <h1>"Hello World", </h1>
                <p>I am Monika, an <strong>fullstack developer</strong></p>
                <span className="phone-link">
                    <a href="tel:7412095299">
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