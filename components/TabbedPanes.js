import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
import TodayIcon from '@material-ui/icons/Today';
import IconButton from '@material-ui/core/IconButton';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  center:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  }
}));

export default function ScrollableTabsButtonForce({profile}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {name, location, cell, email, phone, dob} = profile;
  const birthday = `${dob.date.substring(8,10)}/${dob.date.substring(5, 7)}/${dob.date.substring(0,4)}`;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
            <Tab label="Person" icon={<PersonPinIcon />} {...a11yProps(0)} />
         
            <Tab label="Address" icon={<BusinessIcon />} {...a11yProps(1)} />
            <Tab label="Email" icon={<EmailIcon />} {...a11yProps(2)} />
          <Tab label="Phone" icon={<PhoneIcon />} {...a11yProps(3)} />
         
        
          <Tab label="Birthday" icon={<TodayIcon />} {...a11yProps(4)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
     
    <div className={classes.center}>
      <IconButton>
      {name.title} &nbsp;
       {name.first} &nbsp;
       {name.last}
          
        </IconButton>
      </div>
     
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.center}>
      <IconButton>
        {location.street.number} , {location.street.name}<br/>
          {location.city} , {location.state}<br/>
           
            {location.postcode}<br/>
            {location.country}
        </IconButton>
      </div>
        
      
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={classes.center}>
      <IconButton>
        {email}
        </IconButton>
      </div>
        
      
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className={classes.center}>
      <IconButton>
        phone: {phone}<br/>
        cell:{cell}
        </IconButton>
      </div>
        
       
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className={classes.center}>
      <IconButton>
      {birthday}
        </IconButton>
      </div>
       
       
      </TabPanel>
    </div>
  );
}
