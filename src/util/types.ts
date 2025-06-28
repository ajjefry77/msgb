export type ServerType = 'Nats'

export interface Connection {
  name: string
  ServerType: ServerType
  ServerAddress: string
}
