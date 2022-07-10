import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Só recebe
  // @EventPattern('storage-ec')
  // getStorage(@Payload() message) {
  //   console.log('Message Received', message);
  // }

  //Devolve uma resposta
  @MessagePattern('storage-ec')
  getStorage(@Payload() message) {
    console.log('Message Received', message);
  }
}
