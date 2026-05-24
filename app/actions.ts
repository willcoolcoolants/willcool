'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    const response = await resend.emails.send({
      from: 'Contact Form <info@will-cool.com>', // Replace with your verified domain in production
      to: 'willcoolcoolants@gmail.com', // Your personal email address
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (response.error) {
      return { success: false, error: response.error.message };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to send email' };
  }
}