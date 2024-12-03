import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { Resend } from 'resend';
import { log } from 'console';

@Injectable()
export class EmailService {
  async send(name: string, email: string, message: string) {
    console.log(process.env.RESEND_API_KEY);

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const response = await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: ['agus7montoya@gmail.com'],
        subject: `Mail desde portfolio enviado por ${email}`,
        html: `${message}`,
      });

      return response;
    } catch (error) {
      return error;
    }
  }
}
