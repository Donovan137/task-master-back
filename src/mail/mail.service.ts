import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/users/dto/user.create.dto';
import { Users } from 'src/users/model/users.entity';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: UserCreateDto, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
       from: '"Support Team" <andreyhdiaz17@gmail.com>', 
      subject: 'Recover Password',
      template: './confirmation', 
      context: { // ✏️
        name: user.name,
        url,
      },
    });
  }
}