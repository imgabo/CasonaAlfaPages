import { Container, createStyles, rem, SimpleGrid, Text } from "@mantine/core";
import FotoEquipo from "./componentes/FotoEquipo";
import juan from "./assets/Equipo/juan.jpg";
import boris from "./assets/Equipo/boris.jpg";
import ralf from "./assets/Equipo/Ralf.jpg";

import cristian from "./assets/Equipo/cristian.jpg";
import raul from "./assets/Equipo/raul.jpg";
import jose from "./assets/Equipo/jose.jpg";
import luis from "./assets/Equipo/luis.jpg";
import daniel from "./assets/Equipo/daniel.jpg";
import patricio from "./assets/Equipo/patricio.jpg";
const useStyles = createStyles((theme) => ({
  inner: {
    height: "100%",
    width: "100%",
    minHeight: "100vh",
    [theme.fn.smallerThan("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    backgroundColor: "rgba(234, 234, 234, 0.4)",
  },
  Titulo: {
    fontFamily: "Roboto",
    fontSize: "45px",
    fontWeight: 300,
    textAlign: "left",
    paddingTop: rem(30),
    [theme.fn.smallerThan("md")]: {
      fontSize: "26px",
    },
    color: "#5EA89C",
  },
}));

const Equipo = () => {
  const { classes } = useStyles();
  return (
    <section className={classes.inner}>
      <Container>
        <Text className={classes.Titulo}>Nuestro Directorio</Text>
        <SimpleGrid
          cols={3}
          verticalSpacing="xl"
          breakpoints={[
            { maxWidth: "md", cols: 2, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <FotoEquipo
            image={juan}
            nombre="Juan Encina Venegas"
            cargo="PRESIDENTE"
          ></FotoEquipo>
          <FotoEquipo
            image={boris}
            nombre="Boris Henriquez Fuentes"
            cargo="VICE PRESIDENTE"
          ></FotoEquipo>
          <FotoEquipo
            image={ralf}
            nombre="Ralf Cisternas Venegas"
            cargo="TESORERO"
          ></FotoEquipo>
          <FotoEquipo
            image={cristian}
            nombre="Cristian Reyes Gamboa"
            cargo="TESORERO"
          ></FotoEquipo>
          <FotoEquipo
            image={raul}
            nombre="Raúl Orellana Arancibia"
            cargo="DIRECTOR"
          ></FotoEquipo>
          <FotoEquipo
            image={jose}
            nombre="José González Cornejo"
            cargo="DIRECTOR"
          ></FotoEquipo>
          <FotoEquipo
            image={luis}
            nombre="Luis Ortiz Rosales"
            cargo="DIRECTOR"
          ></FotoEquipo>
          <FotoEquipo
            image={daniel}
            nombre="Daniel Carbone Vaca"
            cargo="DIRECTOR"
          ></FotoEquipo>
        </SimpleGrid>
        <Text className={classes.Titulo}>Equipo Profesional Asesor</Text>
        <SimpleGrid
          cols={3}
          verticalSpacing="xl"
          breakpoints={[
            { maxWidth: "md", cols: 2, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <FotoEquipo
            image={jose}
            nombre="José González Cornejo"
            cargo="ABOGADO"
          ></FotoEquipo>
          <FotoEquipo
            image={patricio}
            nombre="Patricio Veliz"
            cargo="ARQUITECTO"
          ></FotoEquipo>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Equipo;
