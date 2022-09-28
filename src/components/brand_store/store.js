import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Store(){
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);

    const images = [
        "https://global.canon/00cmn/img/common/ogp-logo.png",
        "https://i.pinimg.com/originals/0e/9e/df/0e9edf68a71c691ba32b5e88847588f8.png",
        "https://image3.mouthshut.com/images/imagesp/925004846s.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png",
        "https://www.sony.net/top/2017/img/icon/top-og.jpg",
        "https://i0.wp.com/www.theoasg.com/wp-content/uploads/2016/01/FUni.png?ssl=1",
        "https://play-lh.googleusercontent.com/EdP_VUMKSywQp49WuzDChNHNlzSwXZR0mqsy8LkOtWYZWXMFZgzQXv95P1oWCgibas4"
    ]

    return(
        <>
            <Typography variant="h4" gutterBottom component="div" sx={{ml:4}}>
            Store
            </Typography>
            <OwlCarousel className='owl-theme' loop margin={10} nav items={7}>
                
                {
                    images.map((product,index)=>(
                        <div key={product.id} class="item">                            
                           <img src={images[index]} className="card-img-top p-3" />
                        </div>
                    ))
                }
            </OwlCarousel>
        </>
    )
}