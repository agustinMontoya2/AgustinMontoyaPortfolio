import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendMail(@Body() mail: CreateEmailDto) {
    const { name, email, message } = mail;

    if (!name || !email || !message)
      throw new BadRequestException('Todos los campos son requeridos');

    return await this.emailService.send(name, email, message);
  }
}
