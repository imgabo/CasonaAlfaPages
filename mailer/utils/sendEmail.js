import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "mail.casonaalfa.cl",
    port: process.env.EMAIL_PORT || 465,
    secure: true,
    auth: {
        user:  process.env.EMAIL_USER || 'contacto@casonaalfa.cl',
        pass:  process.env.EMAIL_PASSWORD || '0J%gZ$),;ygr'
    }
});

export default async function sendEmail(email, fullName, phoneNumber, message) {
    try {
        await transporter.verify(); // Verify the connection configuration

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER ,
            to: process.env.EMAIL_USER ,
            subject: `NUEVO MENSAJE FORMULARIO DE CONTACTO ${email} ✔`,
            text: "Hello world?",
            html:` <b>${fullName}</b> ha enviado lo siguiente a traves del formulario:  <br>  ${message} <br> sus datos de contacto son:  <br> -${phoneNumber} <br> -${email}`,
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}


