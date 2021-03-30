import Raect, { Component, useState, useeffect } from 'react';
import {Link} from 'react-router-dom';



class Button extends Component{


    render(){



        return(
            <Link to='/shop'>
            <button>{this.props.text}</button>
          </Link>) 
    }
}

export default Button;