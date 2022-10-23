import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../actions/ProductAction';
import ProductCardForIndex from './ProductCardForIndex';



export default function ProductList({products,...other}){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return(
        <Grid container >
           

                <div className="row mb-2">
            {
                loading 
                ?
                "Loading"
                :
                data.map((product) => (
                    <div key={product.id} className="" >
                        <ProductCardForIndex product={product} />
                    </div>
                ))
            }
            </div>
         

           
        </Grid>
    );
}