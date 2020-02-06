import React, {Component} from 'react';
// import {Grid, Cell } from 'react-mdl'
import {ProgressBar, Container} from 'react-bootstrap'

class Skills extends Component{
    render(){
        return(
            
            <div>
                <Container style={{float:'left'}}>
                    <h5>{this.props.skill}</h5>
                    <ProgressBar now={this.props.progress} label={`${this.props.progress}%`} />
                </Container>
            </div>
            
        )
    }
}

export default Skills