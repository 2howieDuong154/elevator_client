import { useBuilding } from '../context/BuildingContext';
import { Floor } from './Floor';
import { ElevatorCar } from './ElevatorCar';
import { CarPanel } from './CarPanel';

export function Building() {
  const { elevators, isConnected } = useBuilding();

  const floorNumbers = Array.from({ length: 10 }, (_, i) => 1 + i);

  return (
    <div className="building">
      {!isConnected && <div className="connection-warning">Mất kết nối socket...</div>}

      <div className="floors-column">
        {floorNumbers.map((floor) => (
          <Floor key={floor} floor={floor} />
        ))}
      </div>

      <div className="shafts">
        {elevators.map((elevator) => (
          <div key={elevator.id} className="shaft">
            <ElevatorCar elevator={elevator} />
          </div>
        ))}
      </div>
      <div className="car-panels">
        {elevators.map((elevator) => (
          <CarPanel key={elevator.id} elevatorId={elevator.id} />
        ))}
      </div>
    </div>
  );
}