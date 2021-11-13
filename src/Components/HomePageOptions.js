import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles=makeStyles(()=>({
    optionContainer:{
        border:'1px solid green',
        width:'50%',
        marginLeft:'25%',
        marginTop:'22%',
        display:'flex',
        height:'40vh',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'flex-start',
        backgroundColor:'#ffffff',
    },
    optionList:{
        display:'flex',
        flexDirection:'column',
        
        alignItems:'center',
        padding:'4px',
        margin:'20px 20px 20px 20px'
    },
    optionImage:{
    position: 'absolute',
    zIndex: '3',
    background: '#f6f7f8',
    backgroundImage: 'linear-gradient(90deg,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width:'50px',
    flex:'1'
    // animation-duration: 1s;
    // animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
    // animation-name: TemplateShimmer__placeholderShimmer--3ABuG;
    // animation-timing-function: linear;
    },
    optionText:{
        fontSize:'0.8rem',
        marginTop:'7vh'
    }

}));

export default function HomePageOptions() {
    const classes=useStyles();
    const options=[
        {
            imgUrl:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png',
            name:'Ac Service & Repair'
        },
        {
            imgUrl:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template/categories/category_v2/category_72d18950.png',
            name:'Appliances Repair'

        },
        {
            imgUrl:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png',
            name:'Salon for Women'

        },
        {
            imgUrl:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png',
            name:'Salon for Women'

        },
        {
            imgUrl:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png',
            name:'Salon for Women'

        },
        {
        imgUrl:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png',
        name:'Salon for Men'
        },
        {
            imgUrl:'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png',
            name:'Salon for Men'
        }
        
    ]
    return (
        <div className={classes.optionContainer} >
            
            {options.map(url=>(
                <div className={classes.optionList}>
                    <img 
                src={url.imgUrl} 
                alt="" className={classes.optionImage}/>
                <p  className={classes.optionText}>{url.name}</p>
                
                </div>
                
            ))}           
            
        </div>
    )
}
