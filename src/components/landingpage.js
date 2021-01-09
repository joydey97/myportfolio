import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import profile from './profile.png';


 

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
             <Grid className="landing-grid">
                 <Cell col={12}>
                 <img className="avatar-img" src={profile} alt="avatar"/>
                <div className="banner-text">
                    <h1 >Joy Dey</h1>
                    <hr/>
                    
                    
                    <p>HTML/CSS | C++(basic) | Python(basic) | Core Java |  Javascript  |  React</p>
                    
                        <div className="social-links">
                           
                           
                           {/* LINKED IN */}
                            <a href="https://www.linkedin.com/in/joydey97/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true"  />
                            </a>


                            {/* github */}
                            <a href="https://github.com/joydey97?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true"  />
                            </a>

                          
                        </div>

                </div>
                
                 </Cell>

             </Grid>
            </div>
        )
    }
}
export default LandingPage;
