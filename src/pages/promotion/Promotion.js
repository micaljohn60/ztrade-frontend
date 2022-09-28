import {Grid} from '@mui/material';
import Banner from '../../components/banner/Banner';
import SideBarCategory from "../../components/product_category/SideProductCategory";
import Products from "../products";


export default function Promotion(){
    return(
        <div className="container-fluid">
        <Grid container>
            <Grid item md={2}>
                <SideBarCategory/>
            </Grid>
            <Grid item md={10}>
                <Banner image="https://i.pinimg.com/originals/52/35/d7/5235d7dde718e0d4976d844f2a1caac2.jpg" />
                <Products/>
            </Grid>
        </Grid>
            
            
        </div>
    )
}