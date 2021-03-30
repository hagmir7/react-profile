import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

class Cards extends Component{
    render(){
        return(
            <div className='col-xl-4 col-md-6 col-lg-6 col-sm-12'>
            <div className='card'>
                <div className="card1 all-cars">
                    <h4>{this.props.icon}  {this.props.title}</h4>
                    <p>{this.props.body}</p>
                    <span title="Red more about Hassan skills">Red More</span>
                </div>
            </div>
        </div>
        )
    }
}

export default Cards;