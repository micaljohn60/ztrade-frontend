import {Grid,Typography} from '@mui/material';
import SideCategory from '../../share/components/SideCategory';

import Slider from '../../share/components/Slider';
import Products from '../products';

export default function CategoryDetail(){
    return(
        <>
        <div className="container-fluid custom-bg-color" >

            <div className="row">
                
                <SideCategory/>
                
                <div className="col-lg-9">
                    <Typography variant="h4" gutterBottom sx={{ml:3}}>
                        Category : Fashion
                    </Typography>
                    <Products/>
                </div>

            </div>
      
            
        </div>
        </>
    )
}