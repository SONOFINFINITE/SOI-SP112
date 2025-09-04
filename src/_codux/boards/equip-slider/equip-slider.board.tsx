import { createBoard } from '@wixc3/react-board';
import { Equip } from '../../../components/equip/equip';

export default createBoard({
    name: 'EquipSlider',
    Board: () => <Equip />
});
