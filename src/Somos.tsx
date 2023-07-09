import { Container, createStyles, rem, Text, Image } from "@mantine/core";
import Cards from "./componentes/Cards";
import valores1 from "./assets/Nosotros/valores1.webp"
import valores2 from "./assets/Nosotros/valores2.webp"
import juan from "./assets/Equipo/juan.jpg"

const useStyles = createStyles((theme) => ({
    inner: {
        height: '100%',
        minHeight: '100vh',
        marginTop: '50px'
    },
    GeneralContentText: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "Roboto",
        [theme.fn.largerThan("sm")]: {
            padding: "0 70px",
        },
        marginBottom: rem(40),


        flexDirection: 'column'
    },

    Titulo: {
        fontSize: "30px",
        fontWeight: 'bold',
        textAlign: "left",
        color: "#5EA89C",
    },
    boxContent: {
        marginTop: '40px',
        textAlign: 'justify'
    },

    Valores: {
        display: 'flex',
        height: '400px',
        width: '100%',
        [theme.fn.smallerThan("sm")]: {
            flexDirection: 'column',
        },
        gap: rem(20),
        marginBottom: rem(30)
    },
    CartaContent: {
        marginBottom: rem(30)
    }




}));


const QuienesSomos = () => {
    const { classes } = useStyles();

    return (
        <section className={classes.inner}>
            <Container>
                <div className={classes.GeneralContentText}>
                    <Text className={classes.Titulo}>¿QUIÉNES SOMOS?</Text>
                    <div className={classes.boxContent}>
                        <Text>
                            Nuestra historia de vida se forja el año 1978 siendo jóvenes de 15 a 18 años de todas las ciudades
                            de Chile, con un futuro lleno de sueños y esperanzas al integrar las dotaciones de la Armada de
                            Chile como grumetes infantes de marina, viviendo ese año nuestro periodo de formación de
                            instrucción militar y académica. El mes de octubre al amanecer nos informan que debemos ser
                            trasladados al extremo sur de país por el conflicto del Beagle viviendo nuestra mayor experiencia
                            de vida en las islas en litigio con la república Argentina, pasando a ser en esas cinscuntacias de
                            grumetes a soldados del mar, con el orgullo infinito de ser artífices de defender nuestra soberia y
                            preservar la paz entre dos países hermanos. Esa historia de vida nos dejó un legado de
                            hermandad que atesoramos al día de hoy, ya todos en la tercera edad de nuestras vidas forjando
                            nuestro proyecto de vida.
                        </Text>
                    </div>
                </div>

                <div className={classes.Valores}>
                    <Cards
                        image={valores2}
                        title="NUESTRA MISIÓN"
                        text="Otorgarnos la posibilidad de vivir un envejecimiento activo, participativo y creativo estimulando
                        integralmente el aspecto biológico y psicológico, contribuyendo siempre a mantener un sentido de
                        hermandad creado a través de los años."
                    />
                    <Cards
                        image={valores1}
                        title="NUESTRA VISIÓN"
                        text=" Poder lograr un espacio agradable y confortable en donde reine la hermandad y respeto mutuo,
                        forjado a través de nuestra historia de vida para convivir en armonía, lograr tener una vejez digna
                        por sobre toda las cosas."
                    />
                </div>
                <div className={classes.CartaContent}>
                    <Text className={classes.Titulo}>Carta Sr. Presidente directorio señor Juan Encina Venegas</Text>
                    <Text className={classes.boxContent}>
                        <Image width={200} height={300} fit="fill" src={juan} style={{ float: "left", margin: '10px' }} />
                        Nuestra asociación es una organización sin fines de lucro privada, creada para contribuir y aportar
                        una solución imperante en nuestra sociedad hacia los adultos mayores que se encuentran en la
                        actualidad en total abandono, sumidos en su soledad en lugares que muchas veces que no reúnen
                        las condiciones de entregar un espacio digno para que puedan pasar sus días de vejez.
                        Es por ello que nuestra iniciativa como proyecto está orientada a cambiar de mirar nuestras
                        propias vidas como personas acabadas esperando que pasen los años y vivir en total soledad y
                        abandono.
                        Miramos nuestra vida con visión de futuro con la esperanza de llegar a nuestra vejez activos y
                        convivir en comunidad donde reine la verdadera armonía y apoyo en equipo, alegría, esperanza,
                        vivir dignamente con amor al prójimo, ayudándonos con nuestras propias limitaciones, siendo
                        solidarios y capaces de enfrentar nuestra tercera y cuarta edad disfrutando cada momento de
                        nuestra vida.
                        Lucharemos cada día por hacer realidad nuestro proyecto de vida, no es y no será fácil, pero
                        tenemos la convicción que somos capaces de lograr nuestro objetivo.
                        Agradezco a cada miembro del directorio, socios y asesores por su espíritu de cooperación por las
                        metas alcanzadas, aun nos resta un largo camino por avanzar, pero con su ímpetu solidario la
                        asesoría de profesionales en el área, privados con fondos de inversión y el estado Chileno, capaz
                        de general iniciativas públicas para nuestra población de adultos mayores, Dios mediante nos
                        brinde la sabiduría y condición de salud para hacer realidad nuestro proyecto de vida y dejar un
                        legado a nuevas generaciones de adultos mayores de lograr sus sueños y metas si se lo proponen.
                        Fieles a nuestro lema <span style={{
                            fontWeight: 'bold',
                            color: "#5EA89C",
                        }}>"ORGULLO Y COMPROMISO"</span>.
                    </Text>
                </div>
            </Container>


        </section>
    )
}



export default QuienesSomos;