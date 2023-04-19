import { Parallax } from 'react-parallax';
import Tech1 from '../imgs/tech-02.jpg'
const ImageTwo = () => (
    <Parallax className='image' bgImage={Tech1} strength={800}>
        <div className="content">
            <div className='img-text'>
                <h1>Parallax - Effect</h1>
                <h1>Incredible Tech Tools</h1>
            </div>

        </div>
    </Parallax>
);
export default ImageTwo;