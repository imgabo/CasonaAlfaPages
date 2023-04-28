import { createStyles, Container, Group, Anchor, rem, Image } from '@mantine/core';

import CasaLogo from '../assets/logo.png'
const useStyles = createStyles((theme) => ({
  footer: {
    
    borderTop: `6px solid  #6BC2B4`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

const FooterComp =({ links }: FooterSimpleProps) => {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image
                width={'auto'}
     
                fit="contain"
                height={180}
                src={CasaLogo}
              />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}


export default FooterComp;