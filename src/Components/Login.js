import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
// import CloseIcon from '@mui/icons-material/Close';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  

function Login({open, clickHandler}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        right: open
    });
    const [value, setValue] = React.useState();

    React.useEffect(() => {
        console.log(open);
        
    } )

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div>
            <Button variant="outlined" color="error" onClick={()=>{clickHandler(false)}}>  X </Button>
            
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}/>

            <Button variant="outlined" color="error"  onClick={()=>{clickHandler(true)}}>  Send OTP </Button>
        </div>
          
    );
    
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                <SwipeableDrawer
                    anchor={anchor}
                    open={open}
                    onClose={()=>{clickHandler(false)}}
                    onOpen={toggleDrawer(anchor, true)}>

                    {list(anchor)}
                </SwipeableDrawer>
                </React.Fragment>
            ))};
        </div>
    )
}
export default Login;