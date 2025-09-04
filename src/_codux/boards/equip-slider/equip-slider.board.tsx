import { createBoard } from '@wixc3/react-board';
import { EquipSlider } from '../../../components/equip-slider/equip-slider';

export default createBoard({
    name: 'EquipSlider',
    Board: () => <EquipSlider />
});
