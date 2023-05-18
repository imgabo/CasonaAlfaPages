import { createStyles } from "@mantine/core";

import Carrousel from "./componentes/Carrousel";
import Objetivo from "./componentes/Objetivo";
import QuienesSomos from "./componentes/QuienesSomos";
import ProyectoResumen from "./componentes/ProyectoResumen";
import Cards from "./componentes/Cards";

const useStyles = createStyles((theme) => ({
  cards: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  },
}));

function Index() {
  const { classes } = useStyles();

  return (
    <>
      <Carrousel />
      <Objetivo />
      <QuienesSomos />

      <ProyectoResumen />
      <section className={classes.cards}>
        <Cards
          image="https://www.65ymas.com/uploads/s1/11/76/2/bigstock-222351847_1_621x621.jpeg"
          title="PASIÓN POR LAS PERSONAS"
          text="Las personas están en el centro de nuestro quehacer. Nuestra organización y sus proyectos nacen de escuchar y entender a las personas, conscientes de que cada ser es único y valioso, para así diseñar soluciones que hagan una diferencia, actuando siempre con pleno respeto por la vida."
        />
        <Cards
          image="https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2010/06/Feliz_adulto_mayor.jpg"
          title="HOGAR ACOGEDOR"
          text="Proporcionar un entorno hogareño donde los adultos mayores
                    reciben el cuidado y la atención  necesarios para disfrutare de una vida tranquila y cómoda"
        />
        <Cards
          image="https://www.hogarbellohorizonte.com/wp-content/uploads/2020/06/assistenza-domiciliare-anziani.jpg"
          title="TRANQUILIDAD"
          text="Nuestro hogar de reposo se caracteriza por la atención meticulosa a cada detalle para garantizar la tranquilidad y el confort de nuestros residentes."
        />
        <Cards
          image="https://blog.fpmaragall.org/hubfs/iStock-528476282.jpg"
          title="EXPERIENCIA"
          text=" En nuestro hogar de reposo, nos enorgullece ofrecer un nivel de cuidado excepcional, con un equipo altamente capacitado y comprometido en brindar una atención personalizada que garantice la comodidad, el bienestar y la felicidad de cada residente"
        />
      </section>
    </>
  );
}

export default Index;
