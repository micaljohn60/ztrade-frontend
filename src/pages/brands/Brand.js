import {Grid} from '@mui/material';
import SideCategory from '../../share/components/SideCategory';

import Slider from '../../share/components/Slider';
import Products from '../products';

export default function Brand(){
    return(
        <>
        <div className="container-fluid custom-bg-color">
            <div className="row">
                
                <SideCategory/>
                
                <div className="col-lg-9">
                    <Slider/>
                    <Products/>
                    
                </div>
            </div>
        </div>
       
        </>
    )
}