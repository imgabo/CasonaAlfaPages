
import { createStyles} from '@mantine/core';

import Carrousel from "./componentes/Carrousel";
import Objetivo from "./componentes/Objetivo";
import QuienesSomos from "./componentes/QuienesSomos";
import ProyectoResumen from "./componentes/ProyectoResumen";
import Cards from "./componentes/Cards";

const useStyles = createStyles((theme) => ({

    cards : {

        display: 'flex',
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        height:'70vh',
   
        
   
    
    }
}));


function Index(){
   
    const { classes } = useStyles();

    return (
        <>
           
            
                <Carrousel/>
                <Objetivo />
                <QuienesSomos/>
               
                <ProyectoResumen/>
                <section className={classes.cards}>
                    <Cards image='https://fundacionmc.org/assets/uploads/2022/06/rrss_20210407_03-3_2.png' title='PASIÓN POR LAS PERSONAS'   text='Las personas están en el centro de nuestro quehacer. Nuestra organización y sus proyectos nacen de escuchar y entender a las personas, conscientes de que cada ser es único y valioso, para así diseñar soluciones que hagan una diferencia, actuando siempre con pleno respeto por la vida.'/>
                    <Cards image='https://fundacionmc.org/assets/uploads/2022/06/silhouette-of-people-happy-time-1-3-1.png' title='Hola'   text="Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laborum recusandae sapiente nisi, quisquam quasi,
                        voluptate eligendi nulla nobis culpa est eum
                        voluptatibus dignissimos vitae esse in dolores,
                        temporibus adipisci officia." />
                    <Cards image='https://fundacionmc.org/assets/uploads/2022/06/silhouette-of-people-happy-time-1-3-1.png' title='Hola'  text="Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laborum recusandae sapiente nisi, quisquam quasi,
                        voluptate eligendi nulla nobis culpa est eum
                        voluptatibus dignissimos vitae esse in dolores,
                        temporibus adipisci officia." />
                    <Cards image='https://fundacionmc.org/assets/uploads/2022/06/silhouette-of-people-happy-time-1-3-1.png' title='Hola' text="Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laborum recusandae sapiente nisi, quisquam quasi,
                        voluptate eligendi nulla nobis culpa est eum
                        voluptatibus dignissimos vitae esse in dolores,
                        temporibus adipisci officia." />
                    
                </section>
               
          
        </>

    );
}

export default Index;