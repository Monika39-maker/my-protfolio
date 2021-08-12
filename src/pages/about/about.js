import React from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Index() {
    return (
        <div>
          <div className="text-center">
            <h1>My CV</h1>
            <h3>Education</h3>
            <Table striped bordered hover size="sm" className='margin3'>
              <thead>
                <tr>
      
                  <th>Level</th>
                  <th>University</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MBA in Human Resource Management</td>
                  <td>Sunderland University, London </td>
                  <td>1 Year</td>
                  
                </tr>
                <tr>
                  <td>Bachelors in Business Management (BABM)</td>
                  <td>Sunderland University, London </td>
                  <td>2 Years</td>
                  
                </tr>
  
                <tr>
                  <td>Level 6, Association of Business Executives</td>
                  <td>South London College, London </td>
                  <td>3 Years</td>
                </tr>
                <tr>
                  <td>Masters in Business Studies(Major: Finance)</td>
                  <td>Makawanpur Multiple Campus, Nepal</td>
                  <td>3 Years</td>
                </tr>
            </tbody>
          </Table>
            <h3>Work Experience</h3>
            <Table striped bordered hover size="sm" className='margin3'>
              <thead>
                <tr>
      
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Duration</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Customer Care Assistant</td>
                  <td>Mc Donald's Restaurant, London </td>
                  <td> 7 Year</td>
                  <td>Maintain high customer service standtd, manage customer complaint, team-work</td>
                  
                </tr>
                <tr>
                  <td>Administrative Assistant</td>
                  <td>Femack Trainning and Recruitment Consultancy, London </td>
                  <td>1 Year</td>
                  <td>Typing, customer service, phone handlingm filingm assisting the manager in all office management tasks</td>
                  
                </tr>
                <tr>
                  <td>Sales person</td>
                  <td>Lyca Mobile Sim Cards, London </td>
                  <td>3 Years</td>
                  <td>Identifying potential customers and approaching them to promote the product</td>
                </tr>
                <tr>
                  <td>Secondary level Science Teacher</td>
                  <td>Sarashwati Balbodhini Secondary School, Nepal </td>
                  <td>9 Years</td>
                  <td>Teaching Science</td>
                </tr>
          
            </tbody>
          </Table>
          </div>
            
          <div className="margin3">
            <h3>Other Qualifications</h3>
            <ul>
              <li>Knowledge of html, CSS and Javascript, Python, Django, React, NodeJs</li>
              <li>Git and GitHub</li>
              <li>Training on EVENT MANAGEMENT through High Speed Training, U.K.</li>
              <li>Customer care assistant from Mc Donald’s Restaurant</li>
              <li>Carers training for people with learning disablilities</li>
            </ul>
          </div>
          <div className="margin3">
            <h3>Hobbies</h3>
            <ul>
              <li>Playing escape games and riddles</li>
              <li>Learning new languages and other skills</li>
              <li>Karaoke</li>
              <li>Dancing</li>
              <li>Cooking</li>
            </ul>
          </div>
          <div className="margin3">
            <h3>Languages Spoken</h3>
            <ul>
              <li>Nepalese</li>
              <li>Hindi</li>
              <li>English</li>
              <li>French(learning)</li>
            </ul>
          </div>
        </div>
        
    )
}
