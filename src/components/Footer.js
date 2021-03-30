import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Footer extends Component{
    render(){
        return(
            <footer className="footer2">
            <p className="copyright"><FontAwesomeIcon icon='copyright' /> 2021 Copyright, All rights reserved </p>
            <p className="pyhton" title="Python"><FontAwesomeIcon icon='python' /></p>
             </footer>
        )
    }
}
export default Footer;