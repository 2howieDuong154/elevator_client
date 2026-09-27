import { CarCallButton } from './CarCallButton';
import { DoorControls } from './DoorControls';

interface Props {
  elevatorId: number;
}

export function CarPanel({ elevatorId }: Props) {
  const floorNumbers = Array.from({ length: 10 }, (_, i) => 1 + i);

  return (
    <div className="car-panel">
      <div className="car-panel-title">ELEVATOR {elevatorId}</div>
      <div className="car-panel-buttons">
        {floorNumbers.map((floor) => (
          <CarCallButton key={floor} elevatorId={elevatorId} floor={floor} />
        ))}
      </div>
       <DoorControls elevatorId={elevatorId} />
    </div>
  );
}