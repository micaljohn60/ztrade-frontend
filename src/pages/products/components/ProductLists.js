import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../actions/ProductAction';



export default function ProductList({products,...other}){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return(
        <Grid container spacing={1} {...other}>
           

                <div class="row gx-0 mb-2">
            {
                loading 
                ?
                "Loading"
                :
                data.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={2}>
                        <ShopProductCard product={product} />
                    </Grid>
                ))
            }
            </div>
         

           
        </Grid>
    );
}