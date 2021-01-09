import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,CardText,Button,IconButton, CardMenu} from 'react-mdl'; 


class Project extends Component {
    constructor(props){
     super(props);
    this.state = {activeTab: 0};
    }
    toggleCategories()
            {     
                if(this.state.activeTab===0)
                {
                    return(
                    <div className="projects-grid">
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/ cover'}}>
                                React Project#1 portfolio 
                            
                            </CardTitle>
                                        <CardText>

                                        </CardText>


                                        <CardActions border>
                                         <center>   <Button colored>Github</Button>
                                            <Button colored>Live Demo</Button>
                                         </center>
                                        </CardActions>

                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />

                            </CardMenu>


                        </Card>

                        
                      {/*}  <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/ cover'}}>
                                React Project#2  
                            
                            </CardTitle>
                                        <CardText>

                                        </CardText>


                                        <CardActions border>
                                         <center>   <Button colored>Github</Button>
                                            <Button colored>Live Demo</Button>
                                         </center>
                                        </CardActions>

                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" />

                            </CardMenu>


                        </Card>

                    */}


                    </div>


                        
                    )
                }


                

                
            
            }
    render(){
        return(
            <div classNmae="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>

                </Tabs>

                
                <Grid >    
                    <Cell col={12}>
                        <div classNmae="content">{this.toggleCategories()}</div>
                    </Cell>
                    
                </Grid>
            </div>
        )
    }
}
export default Project;
