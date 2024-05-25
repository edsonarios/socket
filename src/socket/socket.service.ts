import { Injectable } from '@nestjs/common'
import { Socket } from 'socket.io'
interface ConnectedClients {
  [id: string]: Socket
}
@Injectable()
export class SocketService {
  private connecteClients: ConnectedClients = {}

  registerClient(client: Socket) {
    this.connecteClients[client.id] = client
  }

  removeClient(clientId: string) {
    delete this.connecteClients[clientId]
  }

  getConnectedClients(): number {
    return Object.keys(this.connecteClients).length
  }
}
