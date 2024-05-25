import { Injectable } from '@nestjs/common'
import { CreateMobileDto } from './dto/create-mobile.dto'
import { UpdateMobileDto } from './dto/update-mobile.dto'
import { Socket } from 'socket.io'
import { SocketGateway } from 'src/socket/socket.gateway'

@Injectable()
export class MobileService {
  constructor(private readonly chatGateway: SocketGateway) {}
  create(createMobileDto: CreateMobileDto) {
    console.log('createMobileDto:', createMobileDto)
    this.chatGateway.emitMessage('products', createMobileDto.message)
    return 'This action adds a new mobile'
  }

  addListener = (socket: Socket) => {
    socket.emit('products', 'Hello from the client')
  }

  findAll() {
    return `This action returns all mobile`
  }

  findOne(id: number) {
    return `This action returns a #${id} mobile`
  }

  update(id: number, updateMobileDto: UpdateMobileDto) {
    console.log(updateMobileDto)
    return `This action updates a #${id} mobile`
  }

  remove(id: number) {
    return `This action removes a #${id} mobile`
  }
}
