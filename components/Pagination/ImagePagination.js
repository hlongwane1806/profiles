import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Link} from '../../routes';
import styled from 'styled-components';
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
.MuiAvatar-img {
  filter: grayscale(100%);
}
`
const Pic = styled.div`
margin:8px;
`


     

class ImageAvatars extends Component{
  constructor(props){
    super(props)
  }
  render(){
    
    return (
      <Container>
      {
                  this.props.profiles.map((profile,index)=>{
                      return(
                        <Pic key={index}>

                          
                          
                          <Link route='profile' key={index} params={{username: profile.login.username, seed:this.props.seed, page:this.props.page}}>
                            <Avatar key={index} alt={`${profile.name.first} ${profile.name.last}`} src={profile.picture.medium || "/broken-image.jpg" } />
                         </Link>
                           
                        </Pic>
                      
                      )
                  })
      }
      </Container>
    );
  }

  
}

export default ImageAvatars;