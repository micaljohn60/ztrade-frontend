import NavBar from "../share/components/NavBar"
import Slider from "../share/components/Slider"
import Typography from "@mui/material/Typography"
import ProductCategory from "../components/product_category/ProductCategory"
import TopSellingProduct from "../components/top_selling_product/TopSellingProduct"
import Promotion from "../components/promotion/Promotion"
import Banner from "../components/banner/Banner"
import Store from "../components/brand_store/store"
import Products from "./products"
import sampleBanner from "../images/sample_banner.jpg"
import SideCategory from "../share/components/SideCategory"
import Menu from "../share/components/Menu"
import Footer from "../components/footer/footer"
    

export default function Index() {
    return (
        <>
        <NavBar />
            <div className="App">
                                 
                    <Menu/>
               
                <Slider/>
                <div className="hero_area">                    
                    <div className="container-fluid">                        
                        <ProductCategory />
                        <TopSellingProduct title="Top Selling Product" carouselID="1"/>
                        
                        <Banner image={sampleBanner}/>
                        <TopSellingProduct title="Product Name"  carouselID="2"/>
                        <Store />
                        <Banner image={sampleBanner} />
                    </div>
                </div>
                <div className="container-fluid">
                    <Products />
                </div>
                
            </div>
            <Footer/>
        </>
    )
}