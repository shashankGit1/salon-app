import React from 'react'
import {makeStyles, requirePropFactory} from '@material-ui/core'
import backgroundVideo from '../static/videos/landingPageBackground.mp4'
import Button from '@material-ui/core/Button'
// import SearchIcon from '@material-ui/icon/Search';

//const logo=require('../static/videos/landingPageBackground.mp4');

const useStyles=makeStyles(()=>({
    navabrContainer:{
        // background:'#000000',
        // display:'flex',
        // // flexDirection:'row-reverse',
        
        // width:'100%',
        // justifyContent:'space-around'
        width: '100%',
        maxHeight: '600px',
        overflow: 'hidden',
        position: 'fixed',
        top: '0',
        right: '0',
        zIndex: '-10',
        color:'white',
    },
    backgroundVideo:{
        // width:'80vw',
        // height:'200vh'
        position: 'relative',
        width: 'auto',
        minWidth: '100%',
        height: 'auto',
        background: 'transparent url(video-bg.jpg) no-repeat',
        backgroundSize: 'cover',
    },
    overlay:{
        position:'absolute',
        top:'0',
        // border:'1px solid green',
        width:'100%',
        minHeight: '600px',
        backgroundColor:'rgba(59,59,59,0.8)'
    },
    textContent:{
        position:'absolute',
        top:'200px',
        left:'43%',
        letterSpacing:'1.5px',
        fontSize:'1.2rem'
    }
  
 

}));
export default function BackgroundVideo() {
    const classes=useStyles();
    return (
        <div className={classes.navabrContainer}>
            
            <video loop autoPlay muted className={classes.backgroundVideo}>
                <source src={backgroundVideo} type="video/mp4" />

            </video>
            <div className={classes.overlay}>
                    {/* <h1>Hello hi</h1> */}
            </div>
            <div className={classes.textContent}>
                <h2>Home services, on Demand.</h2>
                <div>

                </div>
            </div>
           
        </div>
    )
}
