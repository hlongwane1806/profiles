import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {getPage} from '../../api/api';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
  },
}));

const BasicPagination = ({seed, page})=>{
  const classes = useStyles();
  var count =3 + (page/3)*3; ;
 
  return (
    <div className={classes.root}>
     
      <Pagination page ={page} onChange={(event, value)=>getPage(value, seed)} count={count} color="secondary" size="large" showFirstButton showLastButton/>
      
    </div>
  );
}

export default BasicPagination;