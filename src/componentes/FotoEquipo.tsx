import { createStyles,Image, rem } from "@mantine/core";



const useStyles = createStyles((theme) => ({
    content :{
      
        height:rem(500),
        width:rem(250),
        display:'flex',
        flexDirection:'column',
       
   
        
    },
    contentImage :{
        height:rem(300),
      
        width:'100%'
    },
    imagenItem :{
        width:'100%',
        height:'100%',
        objectFit:'fill'
    },
    blockTextContent:{
        marginTop:rem(30),
        fontFamily:'Roboto',
      
        color:'white',
        display:'flex',
        fontWeight:200,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5EA89C',
        boxShadow:' 10px 10px 5px 0px rgba(0,0,0,0.09)'
    }

}));



const FotoEquipo = (props:any) =>{


    const { classes } = useStyles();
    return(

        <div className={classes.content}>
            <div className={classes.contentImage}>
                <img  src={`${props.image}`}  className={classes.imagenItem} />
            </div>
           
            <div className={classes.blockTextContent}>
                <h3>{props.nombre}</h3>
                <h5>{props.cargo}</h5>
            </div>
        </div>
        
        
    )
}


export default FotoEquipo;