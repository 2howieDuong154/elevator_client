import { useEffect, useState } from 'react';
import { socket } from '../socket/socket';
import type { BuildingSnapshot } from '../types/elevator';

//This hook manages the WebSocket connection to receive real-time updates about the elevator system.
export function useElevatorSocket() {
  const [snapshot, setSnapshot] = useState<BuildingSnapshot>([]);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function handleUpdate(data: BuildingSnapshot) {
      setSnapshot(data);
    }
    function handleConnect() {
      setIsConnected(true);
    }
    function handleDisconnect() {
      setIsConnected(false);
    }

    socket.on('elevator:update', handleUpdate);
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);

    return () => {
      socket.off('elevator:update', handleUpdate);
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
    };
  }, []);

  return { snapshot, isConnected };
}