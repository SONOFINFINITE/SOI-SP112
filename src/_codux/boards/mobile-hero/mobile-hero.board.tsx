import { createBoard } from '@wixc3/react-board';
import { MobileHero } from '../../../components/hero/mobileHero';

export default createBoard({
    name: 'MobileHero',
    Board: () => <MobileHero className="custom-class" />,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 932
    }
});
