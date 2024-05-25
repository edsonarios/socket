import { Module } from '@nestjs/common'
import { MobileService } from './mobile.service'
import { MobileController } from './mobile.controller'
import { SocketModule } from 'src/socket/socket.module'

@Module({
  controllers: [MobileController],
  providers: [MobileService],
  imports: [SocketModule],
})
export class MobileModule {}
