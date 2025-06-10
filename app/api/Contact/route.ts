import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    const { firstName, lastName, email, phoneNumber, message} = await request.json();

    if (!firstName || !lastName || !phoneNumber || !email || !message) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Replace with your SMTP server
            port: 587, // Usually 587 or 465
            secure: false, // True for port 465, false for other ports
            auth: {
                user: 'wepwn.reset@gmail.com', // Your email address
                pass: 'mnyc phyg gtgh gfjk',    // Your email password
            },
        });

        await transporter.sendMail({
            from: `"${firstName} ${lastName}"`,
            to: 'amine.mountassir2002@gmail.com', // Your destination email
            subject: 'New Contact Form Submission',
            text: message,
            html: `<p><strong>full Name:</strong> ${firstName} ${lastName}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                   <p><strong>Message:</strong><br>${message}</p>`,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
