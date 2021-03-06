import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import {Link} from '../routes';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
}));

const Links = styled.li`
font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    list-style:none;
    >a{
        color:#fff;
        text-decoration:none;
    }

`
const Navbar =() =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
            Profiles
          </Typography>
          <ul>
            <Button color="inherit"><Links><Link href="/"><a>Home</a></Link></Links></Button>
            
          </ul>
          <MenuItem>
            <IconButton
              
                aria-label="github"
                color="inherit"
                href="https://github.com/hlongwane1806/profiles"
                target="_blank"
              >
                <GitHubIcon/>
              </IconButton>
            </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;