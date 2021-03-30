import React, { Component } from 'react';
import Header from './Header'
import Body from './Body';
import Skills from './Skills';
import Service from './Service';
import Footer from './Footer'


class Home extends Component{
    render(){
        return(
            <div>
                <Header title='H.Agmir' />
                <Body/>
      <Skills/>
      <Service />
      <Footer />
            </div>
            
        )
    }
}

export default Home;