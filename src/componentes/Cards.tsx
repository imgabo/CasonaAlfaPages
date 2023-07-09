import {
  Card,
  Image,
  Text,
  Badge,
  createStyles,
  Button,
  Group,
  rem,
  Paper,
  Title,
  getStylesRef,
} from "@mantine/core";
import { useState } from "react";
const useStyles = createStyles((theme) => ({
  imageContainer: {
    position: 'relative',
    height: "100%",
    width: "100%",
    overflowX:'hidden',
    cursor:'pointer',
   
    
  },
  imagenItem:{
    position:'absolute',
    top:0,
    left:0,
    height:'100%',
    width:'100%',
    objectFit:'cover'
 
  },
  imagenFilter:{
    position:'absolute',
    backgroundColor:'black',
    opacity:'0.5',
    height:'100%',
    width:'100%',

    
  },
  textCard:{
    position:'absolute',
    height:'100%',
    width:'100%',
    color:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Comfortaa',
    fontWeight:100
  },
  imagenFilterHover:{
    position:'absolute',
    backgroundColor:'#264e48',
    opacity:'0.6',
    height:'100%',
    width:'100%',
   

    
  },

 

}));

const Cards = (props: any) => {
  const { classes } = useStyles();
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={classes.imageContainer} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <img  src={`${props.image}`}  className={classes.imagenItem} />
      { !isShown && (
        <>
          <span className={classes.imagenFilter}></span>
          <div className={classes.textCard}>
            <h1>{props.title}</h1>
          </div>
        </>
      )}

      { isShown && (
        <>
          <span className={classes.imagenFilterHover}></span>
          <div className={classes.textCard}>
            <p style={{padding:'0px 30px', textAlign:'center', fontWeight:'400'}}>{props.text}</p>
          </div>
        </>
      )}
       
      
      
    </div>
  );
};

export default Cards;
