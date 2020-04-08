import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '../../routes';
import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 24,
    maxWidth: 400
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 240,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
 
  location:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'start',
      alignItems:'start',
  },
  
 
}));
const Back = styled.a`
padding: 0.5rem 1rem;
color: inherit;
font-family:inherit;
font-size:inherit
font-weight:inherit;
 text-decoration:none;
`



const Profile = ({profile, seed, page})=>{
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {`${profile.name.first} ${profile.name.last}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
         <div className={classes.location}>
          {`${profile.location.city}, ${profile.location.state}`}
             </div>
          </Typography>
        </CardContent>
        <div >
          <Button variant="contained" color="primary" href="#contained-buttons">
                   <Link route='profile' params={{username: profile.login.username, seed:seed, page:page}}>
                  <Back> View Profile</Back>
              </Link>
          </Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={`${profile.picture.large}`}
        title="Live from space album cover"
      />
    </Card>
  );
}

// import styled from 'styled-components';
// const Col = styled.div`


// `
// const Card = styled.article`
// position: relative;
//   width: 100%;
//   cursor: pointer;
//   perspective: 1000px;
//   transition: all .25s ease-in-out;
//   display: flex;
  
//   justify-content:center;
//   align-items:center;
// box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
// border-radius: 4px;
// color: rgba(0, 0, 0, 0.87);
//     transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//     background-color: #fff;
// `
// const Details = styled.div`
//     display: flex;
//     flex-direction: column;
// `

// const Info = styled.div`
//     flex: 1 0 auto;
//     padding: 16px;
// `
// const Name = styled.h5`
//     display: block;
//     font-size: 1.5rem;
//     font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//     font-weight: 400;
//     line-height: 1.334;
//     letter-spacing: 0em;
// `
// const Location = styled.h6`
//     color: rgba(0, 0, 0, 0.54);
//     font-size: 1rem;
//     font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//     font-weight: 400;
//     line-height: 1.75;
//     letter-spacing: 0.00938em;
// `
// const Button = styled.div`
// display: flex;
// align-items: center;
// padding-left: 8px;
// padding-bottom: 8px;
// flex: 0 0 auto;
//     color: rgba(0, 0, 0, 0.54);
//     padding: 12px;
//     overflow: visible;
//     font-size: 1.5rem;
//     text-align: center;
//     transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//     border-radius: 50%;

// `
//const Img = styled.div`
    
// `
// const Profile = ({profile, viewProfile}) => {
   

  
//         return (
//             <Card>
                
//             <Details>
//                 <Info>
//                   <Name>{profile.name.first +" "+profile.name.last}</Name>  
//                     {profile.location.city}, {profile.location.state}
//                 </Info>
                
    
//                 <Button onClick={()=>viewProfile(profile)}>View Profile</Button>
//             </Details>
//             <Img>
//                 <img src={profile.picture.large} alt="profile pic"/>
//             </Img>
              
//             </Card>
//         )
    
// }

export default Profile;

