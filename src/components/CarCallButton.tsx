import { useEffect, useState } from 'react';
import { callCarFloor } from '../api/elevatorApi';
import { useBuilding } from '../context/BuildingContext';

interface Props {
    elevatorId: number;
    floor: number;
}

export function CarCallButton({ elevatorId, floor }: Props) {
    const { elevators } = useBuilding();
    const [active, setActive] = useState(false);

    const handleClick = async () => {
        if (active) return;
        try {
            await callCarFloor(elevatorId, floor);
            setActive(true);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (!active) return;
        const thisElevator = elevators.find((e: any) => e.id === elevatorId);
        if (thisElevator && thisElevator.currentFloor === floor && thisElevator.doorOpen) {
            setActive(false);
        }
    }, [elevators, active, elevatorId, floor]);

    return (
        <button
            onClick={handleClick}
            className={`car-call-button ${active ? 'lamp-on' : ''}`}
        >
            {floor}
        </button>
    );
}