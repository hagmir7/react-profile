import React, { Component } from 'react';
import Button from './Button'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Header extends Component{
    render(){
        return(
          
                <div className='navbar nav p-0'>
                    <Link to='/'><h1 className='text-white p-0 pl-2'>{this.props.title}</h1></Link>
                    <ul className='d-flex p-0 m-0'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/biography'><li>Biography</li></Link>
                        <Link to='/youtube'><li>YouTube</li></Link>
                        <Link to='/contact'><li className='contact'>Contact</li></Link>
                       <li className='h4 pointer menu'> <FontAwesomeIcon icon='bars' /></li>
                    </ul>
                </div>


           
        )
    }
}
Header.defaultProps = {
    title : 'Logo',
}
export default Header;
