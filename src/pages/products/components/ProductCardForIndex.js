import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Typography, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

const ProductImgStyle = styled('img')({
    top: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    position: 'relative',
    left:0
  });

  ProductCardForIndex.propTypes = {
    product: PropTypes.object,
  };


export default function ProductCardForIndex({product,index}){
    const [isLiked, setIsLike] = useState(false);
    const {image,title,price} = product

    const liked = ()=>{
      if(isLiked){
        setIsLike(false)
      }
      else{
        setIsLike(true)
      }
    }

    return (
          <>
            <div className="thumb-wrapper-index">
                <div className="thumb-unit-index">
                  
                  <div className="box" style={{backgroundImage : "url(" + image + ")",backgroundSize : "contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div>
                  <div className="info">
                    <p> {title}</p>
                  </div>
                  <div className="heading mb-3 d-flex justify-content-center"><span>{price} MMK</span></div>
                  <div className=" d-flex justify-content-center">
                    <button className="btn btn-primary rounded" onClick={liked}>
                        <span className='d-flex justify-content-center p-1'><i class={ isLiked ? "fa-solid fa-heart fa-sm  heart m-2"  : "fa fa-heart-o fa-sm m-2" } onClick={liked}></i></span>
                    </button>
                  </div>
                </div>
            </div>

              {/* <div class={index >= 1 ?  "card d-none d-md-block mt-3" : "card mt-3"} style={{ maxWidth: "208px"}}>
                <img class="card-img-top p-3" src={image} alt="..."/>
                <div class="card-body">
                <span class="d-inline-block text-truncate" style={{ maxWidth: "150px"}}>
                      {title}
                    </span>
                  <p class="card-text">{price} MMK</p>
                  <hr/>
                  <a href="" class="btn btn-sm text-dark p-0"><i class="fa fa-heart-o text-primary mr-1"></i></a>
                </div>
              </div> */}

            {/* <div class="col-lg-12 col-md-12 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                          <Box sx={{ pt: '100%', position: 'relative' }}>
                        
                            <ProductImgStyle src={image} />
                         </Box>
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-1">
                        <h6 class="text-truncate m-3">{title}</h6>
                        <div class="d-flex justify-content-center">
                            <h6>{price} MMK</h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="" class="btn btn-sm text-dark p-0"><i class="fa fa-heart-o text-primary mr-1"></i></a>
                        
                    </div>
                </div>
            </div> */}
          </>

          // <div class="col-md-5 col-lg-12 mt-3">
          //   <div class="box">
          //     <div class="img-box">
          //       <img src={image} alt=""/>
          //     </div>
          //     <div class="detail-box">
          //       <h5>
          //         brown Chair Design
          //       </h5>
          //       <div class="price_box">
          //         <h6 class="price_heading">
          //           <span>$</span> 100.00
          //         </h6>
          //         <a href="">
          //           Buy Now
          //         </a>
          //       </div>
          //     </div>
          //   </div>
          // </div>

        // <Card >
        //   <Box sx={{ pt: '100%', position: 'relative' }}>
          
        //     <ProductImgStyle src={image} />
        //   </Box>

        //   <Stack spacing={2} sx={{ p: 3 }}>
        //     <Link to="#" color="inherit" underline="hover" >
        //       <Typography variant="subtitle2" noWrap>
        //         {title}
        //       </Typography>
        //     </Link>

        //     <Stack direction="row" alignItems="right" justifyContent="right">
              
        //       <Typography variant="subtitle1">
        //         &nbsp;
        //         {price} MMK
        //       </Typography>
        //     </Stack>
        //   </Stack>
        // </Card>
    )
}