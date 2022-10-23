import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/ProductAction';
import ShopProductCard from '../../pages/products/components/ProductCard';
import { styled } from '@mui/material/styles';
import { Grid, Box, Card, Link, Typography, Stack } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SideBarCategory from '../product_category/SideProductCategory';
import NavBar from '../../share/components/NavBar';

const ProductImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    left:0
  });

const customCard = () => (
    <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>

            <ProductImgStyle src="https://icon-library.com/images/view-more-icon/view-more-icon-0.jpg"/>
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
            <Link to="#" color="inherit" underline="hover" >
                <Typography variant="subtitle2" noWrap>
                    See More
                </Typography>
            </Link>
        </Stack>
        <Stack direction="row" alignItems="right" justifyContent="right">              
            <Typography variant="subtitle1">
                &nbsp;    <br/>         
            </Typography>
        </Stack>
    </Card>
)

export default function StoreDetail() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    useEffect(()=>{
        dispatch(fetchProducts())
        
    },[])

    return (

        <>
            {
                loading ?
                    "loading"
                    :
                    <>
                    <NavBar/>
                        <SideBarCategory/>
                        <Typography variant="h4" gutterBottom component="div">
                            Promotions
                        </Typography>

                        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                            {
                                products.slice(0, 5).map(product => (
                                    <Grid key={product.id} item xs={12} sm={6} md={2}>
                                        <ShopProductCard product={product} />
                                    </Grid>
                                ))
                            }
                            <Grid item xs={12} sm={6} md={2}>
                                {customCard()}
                            </Grid>

                        </Grid>


                    </>

            }

        </>
    )
}