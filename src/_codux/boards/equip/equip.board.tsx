import { createBoard } from '@wixc3/react-board';
import { Equip } from '../../../components/equip/equip';

export default createBoard({
    name: 'Equip',
    Board: () => <Equip />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
