import React, { Component } from 'react';
import Programs from './Programs'

class Skills extends Component{
    render(){
        return(
         <div className='w-100'>
         <h3 className="skill-title p-2 m-0 mt--1"> MY Skills </h3>
         <main className="main-skills">
         <Programs name='Python' image='python'/>
         <Programs name='Django' image='django'/>
         <Programs name='Php' image='php'/>
         <Programs name='Mysql' image='mysql'/>
         <Programs name='HTML' image='html'/>
         <Programs name='CSS' image='css'/>
         <Programs name='Bootstrap' image='bootstrap'/>
         <Programs name='JavaScript' image='js'/>
         <Programs name='Jquery' image='jquery'/>
         <Programs name='React' image='react'/>
         <Programs name='Adobe xd' image='xd'/>
         <Programs name='Git' image='git'/>
         </main>
       </div>
        )
    }
}

export default Skills;