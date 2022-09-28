import logo from './logo.svg';
import './App.css';
import Products from './pages/products';
import ThemeProvider from './theme';
import NavBar from './share/components/NavBar';
import Slider from './share/components/Slider';
import ProductCategory from './components/product_category/ProductCategory';
import { Typography } from '@mui/material';
import TopSellingProduct from './components/top_selling_product/TopSellingProduct';
import Promotion from './pages/promotion/Promotion';
import Banner from './components/banner/Banner';
import Store from './components/brand_store/store';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Index from './pages';
import ProductDetail from './pages/products/ProductDetail';
import Footer from './components/footer/footer';
import StoreDetail from './components/brand_store/store_detail';
import Brand from './pages/brands/Brand';
import CategoryDetail from './pages/category/Category_Detail';
import PrivacyPolicy from './pages/privacy_policy/PrivacyPolicy';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Chat from './components/chat/chat';
function App() {
  return (
    <ThemeProvider>
      
      <BrowserRouter>
        <Routes>          
          <Route exact path="/" element={<Index/>}/>
          <Route path="/productdetail" element={<ProductDetail/>} />
          <Route path="/store/detail" element={<Brand/>} />
          <Route path="/category/detail" element={<CategoryDetail/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        {/* <Chat/> */}
      </BrowserRouter>
      
      {/* <div className="App">
        <div className="hero_area">
          <NavBar/>
          <Slider/>
          <div className="container">
            <Typography variant="h4" gutterBottom component="div">
              Category
            </Typography>
            <ProductCategory/>
            <TopSellingProduct title="Top Selling Product"/>
            <Promotion/>
            <Banner image="https://i.pinimg.com/originals/52/35/d7/5235d7dde718e0d4976d844f2a1caac2.jpg"/>
            <TopSellingProduct title="Product Name"/>
            <Store/>
            <Banner image="https://cdn.wallpapersafari.com/95/88/nCjKqk.png"/>
          </div>      
        </div>
        
        <Products/>
        
      </div> */}
    </ThemeProvider>
    
  );
}

export default App;
