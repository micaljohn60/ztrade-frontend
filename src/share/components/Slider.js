import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sampleSlider from "../../images/sample_slider.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Slider(){
    return(
        
        <OwlCarousel className='owl-theme' loop margin={10} nav items={1}>
            <div className='item'>
                <img src={sampleSlider} className="img-fluid" alt="Responsive image"/>
            </div>
            <div className='item'>
                <img src={sampleSlider} className="img-fluid" alt="Responsive image"/>                
            </div>
            <div className='item'>
                <img src={sampleSlider} className="img-fluid" alt="Responsive image"/>                
            </div>
        </OwlCarousel>

    )
}