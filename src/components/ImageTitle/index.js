
import Image from '../../assets/roadmapchar2.png'
import {
    ImageContainer,
    ImageDiv,
    Img
} from './ImageTitleElements'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ImageTitle = () => {

    useEffect(()=>{Aos.init({duration: 2000});}, []);

    return ( 
        <ImageContainer>
            <ImageDiv data-aos='fade-up'>
                <Img src={Image} />
            </ImageDiv>
        </ImageContainer>
     );
}
 
export default ImageTitle;