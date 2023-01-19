import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BILLING_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing_microservice',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'billing-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
