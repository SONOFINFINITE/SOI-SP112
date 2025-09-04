import { createBoard } from '@wixc3/react-board';
import { BentoGrid } from '../../../components/BentoGrid/BentoGrid';

export default createBoard({
    name: 'BentoGrid',
    Board: () => <BentoGrid />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
