export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  IDLE = 'IDLE',
}

export enum ElevatorState {
  MOVING = 'MOVING',
  STOPPED = 'STOPPED',
  DOOR_OPEN = 'DOOR_OPEN',
}

export interface ElevatorSnapshot {
  id: number;
  currentFloor: number;
  direction: Direction;
  state: ElevatorState;
  doorOpen: boolean;
  stopsQueue: number[];
}

export type BuildingSnapshot = ElevatorSnapshot[];