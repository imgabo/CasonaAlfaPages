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
import { IconUsers } from "@tabler/icons-react";

const ICON_SIZE = rem(60);

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    width: "25%",
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

const PoblacionObjetivoCard = () => {
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
          <IconUsers size="2rem" stroke={1.5} />
        </ThemeIcon>

        <Text ta="center" fw={900} className={classes.title}>
          Población Objetivo
        </Text>

        <Text fw={300} ta="justify" mt="md">
          Población de adulto mayor autovalente, en edad temprana de 57 a 67
          años. Primera etapa 50 adultos mayores
        </Text>
      </Paper>
    </>
  );
};

export default PoblacionObjetivoCard;
