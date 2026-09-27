import { useEffect, useState } from 'react';
import { callHallElevator } from '../api/elevatorApi';
import { Direction } from '../types/elevator';
import { useBuilding } from '../context/BuildingContext';

interface Props {
  floor: number;
  direction: Direction.UP | Direction.DOWN;
}

export function HallCallButton({ floor, direction }: Props) {
  const { elevators } = useBuilding();
  const [active, setActive] = useState(false);

  const handleClick = async () => {
    if (active) return; 
    try {
      await callHallElevator(floor, direction);
      setActive(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!active) return;
    const servedByAnyElevator = elevators.some(
      (e:any) => e.currentFloor === floor && e.doorOpen // Arrive right floor and door open, the light will be turned off 
    );
    if (servedByAnyElevator) setActive(false);
  }, [elevators, active, floor]);

  return (
    <button
      onClick={handleClick}
      className={active ? 'lamp-on' : 'lamp-off'}
    >
      {direction === Direction.UP ? '▲' : '▼'}
    </button>
  );
}