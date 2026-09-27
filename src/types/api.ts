import type { Direction } from "./elevator";

export interface CallElevatorRequest {
  floor: number;
  direction: Direction;
}

export interface SelectFloorRequest {
  floor: number;
}

export interface ApiSuccessResponse {
  success: true;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export const TOTAL_FLOORS = 10;
export const TOTAL_ELEVATORS = 3;
export const FLOOR_TRAVEL_TIME_MS = 3000;
export const DOOR_OPEN_TIME_MS = 5000;