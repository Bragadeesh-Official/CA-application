import * as nodemailer from 'nodemailer';

/**
 * SMTP Configuration helper for sending emails.
 * Uses Gmail SMTP by default since the user provided gmail addresses.
 */

// These would ideally come from environment variables (e.g., functions.config() or dotenv)
// But for now, we'll set up the structure as requested.
const STMP_USER = "rsbragadeesh@gmail.com";
const SMTP_PASS = "trgh ilkb bmze uspz"; // User mentioned they will provide this "App code"

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: STMP_USER,
        pass: SMTP_PASS,
    },
});

export const sendEmailNotification = async (subject: string, htmlContent: string) => {
    const mailOptions = {
        from: `"CA Application" <${STMP_USER}>`,
        to: "bragadeeshsellappa@gmail.com",
        subject: subject,
        html: htmlContent,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
