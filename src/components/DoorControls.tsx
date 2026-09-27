import { holdDoor, closeDoorImmediately } from '../api/elevatorApi';

interface Props {
  elevatorId: number;
}

export function DoorControls({ elevatorId }: Props) {
  const handleOpen = async () => {
    try {
      await holdDoor(elevatorId); 
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = async () => {
    try {
      await closeDoorImmediately(elevatorId);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmergency = () => {
    alert('Emergency button pressed!');
  };

  return (
    <div className="door-controls">
      <button onClick={handleOpen} title="Open / Hold Door">◀▶</button>
      <button onClick={handleClose} title="Close Door">▶◀</button>
      <button onClick={handleEmergency} className="emergency-btn" title="Emergency">📞</button>
    </div>
  );
}