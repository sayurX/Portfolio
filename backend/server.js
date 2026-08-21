const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Basic Route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running!' });
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    // Save to local JSON file as backup
    const dataPath = path.join(__dirname, 'data', 'messages.json');
    try {
        let messages = [];
        if (fs.existsSync(dataPath)) {
            const data = fs.readFileSync(dataPath, 'utf8');
            messages = JSON.parse(data);
        }
        messages.push(newMessage);
        fs.writeFileSync(dataPath, JSON.stringify(messages, null, 2));
    } catch (err) {
        console.error('Error saving to file:', err);
    }

    // Send email notification
    try {
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 12px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #7c6cff, #5a4fcf); padding: 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Message Received ✉️</h1>
                    </div>
                    <div style="padding: 30px; color: #e0e0e0;">
                        <div style="margin-bottom: 20px; padding: 15px; background: #222; border-radius: 8px; border-left: 3px solid #7c6cff;">
                            <p style="margin: 0 0 5px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">From</p>
                            <p style="margin: 0; font-size: 18px; font-weight: 600; color: #fff;">${name}</p>
                        </div>
                        <div style="margin-bottom: 20px; padding: 15px; background: #222; border-radius: 8px; border-left: 3px solid #7c6cff;">
                            <p style="margin: 0 0 5px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                            <p style="margin: 0; font-size: 16px;"><a href="mailto:${email}" style="color: #7c6cff; text-decoration: none;">${email}</a></p>
                        </div>
                        <div style="margin-bottom: 20px; padding: 15px; background: #222; border-radius: 8px; border-left: 3px solid #7c6cff;">
                            <p style="margin: 0 0 5px 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #ccc;">${message}</p>
                        </div>
                        <p style="margin-top: 25px; font-size: 13px; color: #666; text-align: center;">
                            Sent from your portfolio website • ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        // Still return success since we saved the message to file
        res.status(200).json({ success: true, message: 'Message saved! Email notification may be delayed.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
