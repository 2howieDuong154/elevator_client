import { Direction } from '../types/elevator';
import { HallCallButton } from './HallCallButton';

interface Props {
  floor: number;
}

export function Floor({ floor }: Props) {
  return (
    <div className="floor-row">
      <span className="floor-label">{floor}</span>
      <div className="hall-buttons">
        {floor < 10 && <HallCallButton floor={floor} direction={Direction.UP} />}
        {floor > 1 && <HallCallButton floor={floor} direction={Direction.DOWN} />}
      </div>
    </div>
  );
}