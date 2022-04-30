import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './routes'
import {Router} from 'react-router-dom'
import history from './services/history';
import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends React.Component {
 
  render() {
    return (
        <div>
          <h1>working</h1>
          <Router history={history}>
            <Routes />
          </Router>
           
        </div>
          
        
         
      
  
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);









