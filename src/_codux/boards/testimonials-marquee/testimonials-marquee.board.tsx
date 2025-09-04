import { createBoard } from '@wixc3/react-board';
import { TestimonialsMarquee } from '../../../components/TestimonialsMarquee/TestimonialsMarquee';

export default createBoard({
    name: 'TestimonialsMarquee',
    Board: () => <TestimonialsMarquee className="custom-class" />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
