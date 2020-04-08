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
        title="User profile picture"
      />
    </Card>
  );
}

export default Profile;

