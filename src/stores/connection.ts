import {
  StringCodec,
  connect as wsConnect,
  type ConnectionOptions,
  type NatsConnection,
  type Subscription,
} from 'nats.ws'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConnectionStore = defineStore('connection', () => {
  const wsConnection = ref<NatsConnection>()
  const sc = StringCodec()

  async function connect(options: ConnectionOptions) {
    wsConnection.value = await wsConnect(options)
    console.log(`connected to ${wsConnection.value.getServer()}`)
  }

  async function subscribe(subscription: string) {
    if (!wsConnection.value) throw new Error('The connection not established')
    const sub = wsConnection.value.subscribe(subscription)
    listener(sub)
  }

  async function listener(sub: Subscription) {
    for await (const m of sub) {
      console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`)
    }
    console.log('subscription closed')
  }

  async function publish<T>(subscription: string, payload: T) {
    if (!wsConnection.value) throw new Error('The connection not established')
    const _payload = typeof payload == 'string' ? payload : JSON.stringify(payload)
    wsConnection.value.publish(subscription, sc.encode(_payload))
  }

  return {
    wsConnection,
    connect,
    subscribe,
    publish
  }
})
