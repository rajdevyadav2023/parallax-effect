import { Parallax } from 'react-parallax';
import Tech1 from '../imgs/tech-03.jpg'
const ImageThree = () => (
    <Parallax className='image' bgImage={Tech1} strength={800}>
        <div className="content">
            <div className='img-text'>
                <h1>Parallax - Effect</h1>
                <h1>Tech is Anywhere, Everywhere</h1>
            </div>

        </div>
    </Parallax>
);
export default ImageThree;