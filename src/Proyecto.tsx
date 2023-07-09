import { createStyles, rem, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import CarouselProyecto from "./componentes/CarouselProyecto";
import plano from "./assets/plano.webp";
import CaracteristicasCard from "./componentes/CaracteristicasCard";
import RecursosCard from "./componentes/RecursosCard";
import ObjetivoProyectoCard from "./componentes/ObjetivoProyectoCard";
import PoblacionObjetivoCard from "./componentes/PoblacionObjetivoCard";

const useStyles = createStyles((theme) => ({
  inner: {
    height: '100%',
    minHeight: '100vh',
    
},
  cardDescripcion: {

    width: "100%",
    
 
    overflow: "hidden",
    position: "relative",
    [theme.fn.smallerThan("md")]: {
      display: "flex",
      alignItems: "center",
      height:'auto',
      justifyContent: "center",
     
    },
    paddingBottom:rem(0),

    backgroundColor: "rgba(234, 234, 234, 0.4)",
  },
  plano: {
    position:'absolute',
    opacity:0.02,
    height:'100%',
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
    
    
  },
  cardDetails :{
    padding:rem(3),
    marginTop:'30px',

    display:'flex',
    gap:'3rem',
   
    justifyContent:'center',
    [theme.fn.smallerThan("md")]: {
        // display:'grid',
        // gridRow:'auto auto',
        // gridTemplateColumns:'200px 200px',
        // columnGap:'20px'
        flexDirection:'column'
        
    }
  }
}));

const Proyecto = () => {
  const { classes } = useStyles();
  return (
    <section className={classes.inner}>
      <CarouselProyecto />
      <div className={classes.cardDescripcion}>
        <div className={classes.plano}>
            <Image height={"auto"} width={"auto"} src={plano} />
        </div>
        <div className={classes.cardDetails}  >
            <CaracteristicasCard />
            <RecursosCard />
            <ObjetivoProyectoCard/>
            <PoblacionObjetivoCard />
        </div>
        
      </div>
    </section>
  );
};

export default Proyecto;
