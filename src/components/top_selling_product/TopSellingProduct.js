import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/ProductAction';
import ShopProductCard from '../../pages/products/components/ProductCard';
import { Grid,Typography } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TopSellingProduct({title, carouselID}){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    useEffect(()=>{
        dispatch(fetchProducts())
        console.log("top selling product")
        console.log(products)
        console.log(loading)
    },[])

    return(
        
        <>
        {
            loading ?
            "loading"
            :
            <>
            <div className="row d-flex  justify-content-between">
                
                <Typography variant="h4" component="div" sx={{ml:4}}>
                {title}
                </Typography>
                <div>
                    <button className="mr-1 carousel-button" href={"#carouselExampleControls"+carouselID}  role="button" data-slide="prev">
                        <i class="fa-solid fa-angle-left text-white ml-2 mr-2"></i>
                    </button>
                    <button className="ml-1 carousel-button" href={"#carouselExampleControls"+carouselID}  role="button" data-slide="next">
                    <i class="fa-solid fa-angle-right text-white ml-2 mr-2"></i>
                    </button>
                </div>
                                

                {/* <a class="carousel-control-prev" href={"#carouselExampleControls"+carouselID}  role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href={"#carouselExampleControls"+carouselID}  role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}
            </div>

           
                
            <div id={"carouselExampleControls"+carouselID} class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div class="cards-wrapper">
                  {
                        products.slice(0,8).map((product,index)=>(
                            <div key={product.id} className="">                            
                                <ShopProductCard product={product} index={index} /> 
                            </div>
                         ))
                    }
                    </div>
                        
                    </div>
                    <div class="carousel-item">
                    <div class="cards-wrapper">
                    {
                        products.slice(7,15).map((product,index)=>(
                            <div key={product.id} className="">                            
                                <ShopProductCard product={product} index={index} /> 
                             </div>
                         ))
                    }
                    </div>
                        
                    </div>
                </div>
               
               
            </div>
            </>
            // <div className="container-fluid mt-2">
            //     <Typography variant="h4" gutterBottom component="div">
            //     {title}
            //     </Typography>
                

            //     <div class="row px-xl-5 pb-3">

            //     <OwlCarousel className='owl-theme' loop margin={1} nav items={5}>
                
                    
            //         {
            //             products.map(product=>(
            //                 <div key={product.id} className="">                            
            //                     <ShopProductCard product={product} /> 
            //                 </div>
            //             ))
            //         }
                    
            //     </OwlCarousel>
            //     </div>
                
            // </div>
            
        }
        
        </>
    )
}