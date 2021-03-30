import React, { Component } from 'react';
import {BrowserRouter as Rout, Switch, Route} from 'react-router-dom';
import Shop from './Shop';
import Home from './Home';
import Body from './Body';
import icons from './icons/icons';
import Skills from './Skills';
import Service from './Service';
import Footer from './Footer';
import Contact from './Contact'

class App extends Component{
  render(){
    return(
      <div>
        <ul>

         
        </ul>
 

      <Rout>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/contact'component={Contact} />
        

        </Switch>

      </Rout>

      </div>


    )
  }
}

export default App;