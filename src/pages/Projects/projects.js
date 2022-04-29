import React from 'react';
import laurarose from '../../lauraimg-edited.png';
import kamaneimg from '../../kamaneimg-edited.png';
import sabinaimg from '../../sabinaimg-edited.png';


function Projects() {
    return (
        <div>
            <h1 className="text-center">Projects</h1>
            <div className="row margin3 mb-3">
                <div className="proj">
                    <a href="https://www.laurarosesweetdreams.co.uk/"><img src={laurarose} className="project-img" alt="laurarose web"/></a>
                    <div>
                        <h3 className="text-center">Simple website</h3>
                        <p>This is my project that I created and then commercially deployed on behalf of my client.I used a template. However, I had to customize many elements. I changed the use of jquery for responsive navbar to javascript. The layout messed up when I added the company name. I had to customize css to make it work with the long company name. </p>
                    </div>

                </div>
                <div className="proj">
                    <a href="https://vast-reaches-96167.herokuapp.com/"><img src={sabinaimg} className="project-img"/></a>
                    <div className="proj-info">
                        <h3 className="text-center">Django based Ecommerce Website</h3>
                        <p>This website uses Python and Django. It saves registered users information in postgresql database. All the images are saved in AWS. It also uses bcrypt to safeguard the users data. At the end of checkout process, the total of price is calculated and retrieved from the backend instead of frontend so that it cannot be manupulated via javascript. The paypal api is used to enabe the transaction between the user and the client</p>
                    </div>
                    <a href="https://vast-reaches-96167.herokuapp.com/"><img src={sabinaimg} className="project-img" alt="sabina-web"/></a>
                </div>
                <div className="proj">
                    <a href="https://kamane.herokuapp.com/"><img src={kamaneimg} className="project-img" alt='kamaneWeb'/></a>
                    <div className="proj-info">
                        <h3 className="text-center">A Dynamic Django based school website</h3>
                        <p>This website is for a school in Nepal. The website allows students to sign in to their portal and check their reports. Similarly, the in-buit admin page of django allows client to input data</p>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Projects
