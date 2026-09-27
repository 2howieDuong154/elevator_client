import type { ElevatorSnapshot } from '../types/elevator';
import cabinClosedImg from '../assets/Close.png';
import cabinOpenImg from '../assets/Open.png';

interface Props {
  elevator: ElevatorSnapshot;
}

const FLOOR_HEIGHT = 120;

export function ElevatorCar({ elevator }: Props) {

  const bottomOffset = (elevator.currentFloor - 1) * FLOOR_HEIGHT;

  return (
    <div
      className="elevator-car"
      style={{ bottom: bottomOffset, transition: `bottom 0.3s linear` }}
    >
      <img
        src={elevator.doorOpen ? cabinOpenImg : cabinClosedImg}
        alt={`Elevator ${elevator.id}`}
      />
    </div>
  );
}