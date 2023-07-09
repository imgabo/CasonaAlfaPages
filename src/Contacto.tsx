
import { Button, Container, createStyles, Image, rem, SimpleGrid, Text, Textarea, TextInput } from "@mantine/core";
import contacto1 from './assets/Contacto/contacto1.png'

import contacto3 from './assets/Contacto/contacto3.png'
import contacto4 from './assets/Contacto/contacto4.png'

import { TbSend } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";
// import nodemailer from "nodemailer";




const useStyles = createStyles((theme) => ({
    inner: {
        height: '100%',
        minHeight: '100vh'
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
    contenedor: {
        display: 'flex',
        gap: '13px'

    },
    contactoBox: {
        backgroundColor: 'rgba(234, 234, 234, 0.4)',
        height: '600px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderRadius: theme.radius.sm,


    },
    contenedorImagenes: {
        height: '250px',
        width: '100%',
        position: 'relative',
        [theme.fn.smallerThan("sm")]: {
            display: 'none'
        }
    }
}));

const Contacto = () => {
    const { classes } = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        phoneNumber: '',
        message: ''
    });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formData)

        const data = {
            formData
        }

        const response = await axios.post("http://localhost:5000/api/sendemail",data);
        console.log(response.data)

        // Resetear el formulario después del envío exitoso
        setFormData({
            email: '',
            fullName: '',
            phoneNumber: '',
            message: ''
        });
    };

    return (
        <>
            <section className={classes.inner}>
                <Container>
                    <Text className={classes.Titulo}>Contactanos</Text>
                    <div className={classes.contenedor}>
                        <div className={classes.contenedorImagenes}>
                            <Image width={200} height={300} fit="fill" radius="md" src={contacto1} style={{ position: 'absolute', top: 0, left: 0 }} />
                            <Image width={300} height={250} fit="fill" radius="md" src={contacto3} style={{ position: 'absolute', top: 130, right: 0 }} />
                            <Image width={300} height={250} fit="fill" radius="md" src={contacto4} style={{ position: 'absolute', top: 300, left: 0 }} />
                        </div>
                        <div className={classes.contactoBox}>
                            <form onSubmit={handleSubmit}>
                                <div style={{ margin: '30px', position: 'relative' }}>
                                    <TextInput label="Correo Electrónico" name="email" placeholder="examples@email.com" value={formData.email}
                                        onChange={handleChange} />
                                    <TextInput label="Nombres y Apellidos" name="fullName" placeholder="Carlos Ramirez" value={formData.fullName}
                                        onChange={handleChange} />
                                    <TextInput label="Numero de Telefono" name="phoneNumber" placeholder="+56()" value={formData.phoneNumber}
                                        onChange={handleChange} />
                                    <Textarea placeholder="Comentario" name="message" label="Mensaje:" withAsterisk minRows={10} value={formData.message}
                                        onChange={handleChange} />
                                    <Button type="submit" color="teal" size="sm" uppercase style={{ position: 'absolute', right: 0, marginTop: '15px' }} >
                                        ENVIAR  <TbSend />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                </Container>
            </section>


        </>
    )
}


export default Contacto;