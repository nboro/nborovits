import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>

                <Cell col={4}>
                    <p style={{fontSize:'20px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <p style={{fontSize:'20px'}}>{this.props.jobDescription}</p>
                </Cell>

            </Grid>
        )
    }
}

export default Experience;