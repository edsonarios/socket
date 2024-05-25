import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SocketModule } from './socket/socket.module'
import { MobileModule } from './api/mobile/mobile.module'

@Module({
  imports: [SocketModule, MobileModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [SocketModule],
})
export class AppModule {}
