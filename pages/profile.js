import React, {Component} from 'react';
import Layout from '../layouts/Main'
import {Link} from '../routes';
import styled from 'styled-components';
import {getProfile} from '../api/api';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '../components/TabbedPanes';
import Button from '@material-ui/core/Button';
import ImagePagination from '../components/Pagination/ImagePagination';

const Background = styled.div`
background: #009FFF;
background: linear-gradient(to right, #ec2F4B, #009FFF);
`
const Image = styled.div`
>img {
  border-radius: 50%;
  width: 150px;
  height: auto;
}
`;

const BackButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:1rem;
   
`
const Back = styled.a`
padding: 0.5rem 1rem;
color: inherit;
font-family:inherit;
font-size:inherit
font-weight:inherit;
 text-decoration:none;
`
  
class Profile extends Component{

  static async getInitialProps({query}){
    
  const res = await getProfile(query.page, query.seed)
  const data = await res.json()
  const profile = data.results.filter((profile)=> profile.login.username === query.username)
  return { profiles: data.results, profile: profile[0], seed: query.seed, page:query.page}
}


render(){
  const {profile, page, seed} = this.props;
  
  return(
    <Layout>
        <React.Fragment>
            <CssBaseline  />
          <Container fixed  style={{  marginTop: '6rem', width: '60vw'}} >
            
            <Typography component="div" style={{ display:'flex', justifyContent:'center', alignItems:'center', background: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/435311/photo__mountains.jpg') no-repeat center", height: '50vh'}}>
            <Image>
             <img src={profile.picture.large} alt="" />
            </Image>
            </Typography>
            <Tabs profile={profile}/>

            
            <BackButton>
            <Button variant="contained" color="primary" href="#contained-buttons">
            <Link route='index' params={{seed:seed, page:page}}>
                  <Back> Back</Back>
              </Link>
            </Button>
            </BackButton>
            <ImagePagination seed={seed} page={page} profiles={this.props.profiles} currentProfile={profile} />
           
          </Container>
        </React.Fragment>
              
      
                  
     
      
              
  </Layout>
  )
}

}
  

export default Profile;