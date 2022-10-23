import {Grid,Typography} from '@mui/material';
import Footer from '../../components/footer/footer';
import Menu from '../../share/components/Menu';
import NavBar from '../../share/components/NavBar';
import SideCategory from '../../share/components/SideCategory';

import Slider from '../../share/components/Slider';
import Products from '../products';

export default function CategoryDetail(){
    return(
        <>
        <div className="custom-container-fluid" >
            <NavBar/>
            <Menu/> 
            <div className="row">
                
                <SideCategory/>
                
                <div className="col-lg-9">
                    <Typography variant="h4" gutterBottom sx={{ml:3,mt:3}}>
                        Category : Fashion
                    </Typography>
                    <Products/>
                </div>

            </div>
            <Footer/>
            
        </div>
        </>
    )
}