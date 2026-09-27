import { io, Socket } from 'socket.io-client';
import type { BuildingSnapshot } from '../types/elevator';

//Config socket.io client to connect to the server
interface ServerToClientEvents {
  'elevator:update': (snapshot: BuildingSnapshot) => void;
}

interface ClientToServerEvents {}

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  import.meta.env.VITE_WS_URL as string,
  {
    autoConnect: true,
    transports: ['websocket'],
  }
);