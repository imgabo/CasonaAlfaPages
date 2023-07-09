import express from "express";
import cors from "cors"
import dotenv from "dotenv/config.js"
import sendEmail from "./utils/sendEmail.js"
const app = express();

//middleware
app.use(express.json());
app.use(cors());


// Route
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/api/sendemail", async (req, res) => {
    const { email, fullName, phoneNumber, message } = req.body.formData;
    console.log(email)
    try {

        await sendEmail(email, fullName, phoneNumber, message);
        res.status(200).json({ success: true, message: "Email Sent" });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

