import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { SocketService } from './socket.service'
import { Server, Socket } from 'socket.io'

@WebSocketGateway({ cors: true, namespace: '/products' })
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server

  constructor(private readonly socketService: SocketService) {}

  afterInit(server: Server) {
    this.wss = server
  }

  handleConnection(client: Socket) {
    this.socketService.registerClient(client)
    console.log('Connected clients:', this.socketService.getConnectedClients())
  }
  handleDisconnect(client: Socket) {
    this.socketService.removeClient(client.id)
    console.log('Connected clients:', this.socketService.getConnectedClients())
  }

  @SubscribeMessage('products')
  handleMessage(client: Socket, payload: string) {
    console.log('Message:', payload)
    client.broadcast.emit('products', payload)
    // this.wss.emit('products', payload)
  }

  emitMessage(event: string, message: string) {
    console.log('event:', event, 'message:', message)
    this.wss.emit(event, message)
  }
}
