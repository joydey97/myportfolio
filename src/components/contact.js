import React, { Component } from 'react';
import {Grid,Cell,List, ListItem, ListItemContent } from 'react-mdl';
 

class Contact extends Component {
    render(){
        return(
            <div className="contact-body>">
                <Grid className="contact-grid">
                <Cell col={6}>
            <h2>Joy Dey</h2>
            <img
              src="https://scontent-del1-1.xx.fbcdn.net/v/t1.0-0/p526x296/136683458_4317887498239816_382029075758466032_o.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=ZZwrDZUZh5gAX9axdQm&_nc_ht=scontent-del1-1.xx&tp=6&oh=a8158ddb0ed4ae71d092f8ba34aab771&oe=6020D363"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (91) 8285679972
                  </ListItemContent>
                </ListItem>

               
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    joydey02@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    joydey.
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
                 </Grid>
            </div>
            
        )
    }
}
export default Contact;
