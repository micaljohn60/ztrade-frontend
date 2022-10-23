import {Grid} from '@mui/material';
import Footer from '../../components/footer/footer';
import Menu from '../../share/components/Menu';
import NavBar from '../../share/components/NavBar';
import SideCategory from '../../share/components/SideCategory';

import Slider from '../../share/components/Slider';
import Products from '../products';

export default function Brand(){
    return(
        <>
        <div className="custom-container-fluid custom-bg-color">
            <NavBar/>
            <Menu/>
            <div className="row">
                
                <SideCategory/>
                
                <div className="col-lg-9">
                    <Slider/>
                    <Products title="THome"/>
                    
                </div>
            </div>
            <Footer/>
        </div>
       
        </>
    )
}