import { createContext, useContext, type ReactNode } from 'react';
import { useElevatorSocket } from '../hooks/useElevatorSocket';
import type { ElevatorSnapshot } from '../types/elevator';

interface BuildingContextValue {
  elevators: ElevatorSnapshot[];
  isConnected: boolean;
}

const BuildingContext = createContext<BuildingContextValue | null>(null);

export function BuildingProvider({ children }: { children: ReactNode }) {
  const { snapshot, isConnected } = useElevatorSocket();
  return (
    <BuildingContext.Provider value={{ elevators: snapshot, isConnected }}>
      {children}
    </BuildingContext.Provider>
  );
}

export function useBuilding(): BuildingContextValue {
  const ctx = useContext(BuildingContext);
  if (!ctx) throw new Error('useBuilding must be used within BuildingProvider');
  return ctx;
}