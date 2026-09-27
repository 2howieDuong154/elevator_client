import { Direction } from './elevator';

export interface HallCallRequest {
    floor: number;
    direction: Direction.UP | Direction.DOWN;
}

export interface HallCallResponse {
    elevatorId: number;
}

export interface CarCallRequest {
    floor: number;
}
