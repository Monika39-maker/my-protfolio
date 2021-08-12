import React from 'react'
import { Switch, Route} from 'react-router-dom';
import Index from '../pages/home';
import About from '../pages/about/about';
import Projects from '../pages/Projects/projects';
import Contact from '../pages/contact/contact'




export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Index} /> 
            <Route path='/about' exact component={About} /> 
            <Route path='/projects' exact component={Projects} />  
            <Route path='/contact' component={Contact} /> 
        </Switch>
    )
}

