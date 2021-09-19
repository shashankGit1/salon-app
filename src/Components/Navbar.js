import React from 'react'
import {makeStyles, requirePropFactory} from '@material-ui/core'
import backgroundVideo from '../static/videos/landingPageBackground.mp4'
import Button from '@material-ui/core/Button'

//const logo=require('../static/videos/landingPageBackground.mp4');

const useStyles=makeStyles(()=>({
    
    navbarContainer:{
        color:'#fcad03',
        marginLeft:'3.5rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:'1.5rem'

    },
    navbarButton:{
        color:'#fcad03',
        // marginTop:'2.5rem',
        fontWeight:'600',
        fontSize:'1.1rem'

    },
    rightButton:{
      
    }

  
 

}));

export default function Navbar() {
    const classes=useStyles();
    return (
        <div className={classes.navbarContainer}>
            <div>
            <Button  className={classes.navbarButton}>One Call Problem Solve </Button>
            </div>
             
            
            
        
            <div className={classes.rightButton}>
                <Button className={classes.navbarButton}>Register As A Professionals</Button>
                <Button className={classes.navbarButton} style={{paddingLeft:'30px'}}>Login / Sign Up</Button>
                

            </div>
        </div>
    )
}
