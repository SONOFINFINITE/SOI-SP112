import { createBoard } from '@wixc3/react-board';
import { DrawerMenu } from '../../../components/Drawer/drawer-menu';

export default createBoard({
    name: 'DrawerMenu',
    Board: () => <DrawerMenu isOpen={true} onClose={() => console.log('Drawer closed')} />
});
