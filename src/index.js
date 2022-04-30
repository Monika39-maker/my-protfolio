import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './routes'
import {Router} from 'react-router-dom'
import history from './services/history';
import Navbar from './nav';
import Footer from './footer'


class Index extends React.Component {
  
 
  render() {
    return (
        <div className='main' >
          
          <Navbar />
          <Router history={history}>
            <Routes />
          </Router>
          <Footer />
          
        </div>
          
        
         
      
  
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);








