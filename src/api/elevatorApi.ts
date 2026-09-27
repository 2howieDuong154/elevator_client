import { httpClient } from './httpClient';
import type { Direction } from '../types/elevator';
import type { HallCallResponse } from '../types/hallcall';

export async function callHallElevator(
  floor: number,
  direction: Direction.UP | Direction.DOWN
): Promise<HallCallResponse> {
  const { data } = await httpClient.post<HallCallResponse>('/hall-call', {
    floor,
    direction,
  });
  return data;
}

export async function callCarFloor(elevatorId: number, floor: number): Promise<void> {
  await httpClient.post(`/car-call`, { elevatorId, floor });
}

export async function holdDoor(elevatorId: number): Promise<void> {
  await httpClient.post(`/door/${elevatorId}/hold`);
}

export async function closeDoorImmediately(elevatorId: number): Promise<void> {
  await httpClient.post(`/door/${elevatorId}/close`);
}