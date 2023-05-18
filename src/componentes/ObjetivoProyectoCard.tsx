import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  rem,
} from "@mantine/core";
import { IconEyeCheck } from "@tabler/icons-react";

const ICON_SIZE = rem(60);

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",

    width:'30%',
    [theme.fn.smallerThan("md")]: {
        minWidth:'100%',
       
    },
    
    padding: theme.spacing.xl,
    paddingTop: `calc(${theme.spacing.xl} * 1.5 + ${ICON_SIZE} / 3)`,
  },

  icon: {
    position: "absolute",
    backgroundColor: "#5EA89C",
    top: `calc(-${ICON_SIZE} / 3)`,
    left: `calc(50% - ${ICON_SIZE} / 2)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

const ObjetivoProyectoCard = () => {
  const { classes } = useStyles();

  return (
    <>
      <Paper
        radius="md"
        withBorder
        className={classes.card}
        mt={`calc(${ICON_SIZE} / 3)`}
      >
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
          <IconEyeCheck size="2rem" stroke={1.5} />
        </ThemeIcon>

        <Text ta="center" fw={900} className={classes.title}>
          Objetivo del Proyecto
        </Text>
    
        <Text fw={300} ta="justify" mt="md">
          Desarrollar un proyecto de innovación social para crear casas de
          reposo sin fines de lucro para adultos mayores buscando las
          herramientas necesarias para que se puedan autofinanciar con sus
          propios recursos, subvenciones del estado y desarrollar una actividad
          comercial de acuerdo a sus propias capacidades
        </Text>
      </Paper>
    </>
  );
};

export default ObjetivoProyectoCard;
