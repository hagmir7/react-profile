import React, { Component } from 'react';


class Programs extends Component{
    render(){
        return(
            <div className="skill">
            <img className="image-skill" src={process.env.PUBLIC_URL + `image/${this.props.image}.png`} width='50px' alt={this.props.image}/>
            <p className="skill-name">{this.props.name}</p>
         </div>
        )
    }
}
export default Programs;