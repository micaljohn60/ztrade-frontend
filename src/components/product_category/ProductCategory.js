import * as React from 'react';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: '#000',
      },
    },
  });

export default function ProductCategory() {

  const categories = ["Groceries", "Beverages", "Fresh", "Snacks", "Beer, Wine" , "Health Care", "Beauty", "Household", "Kitchen", "Fashion", " Baby", "Office"]
  const images = [
    "https://technext.github.io/eshopper/img/cat-1.jpg",
    "https://technext.github.io/eshopper/img/cat-2.jpg",
    "https://technext.github.io/eshopper/img/cat-3.jpg",
    "https://technext.github.io/eshopper/img/cat-4.jpg",
    "https://technext.github.io/eshopper/img/cat-5.jpg",
    "https://technext.github.io/eshopper/img/cat-6.jpg",
    "https://technext.github.io/eshopper/img/cat-1.jpg",
    "https://technext.github.io/eshopper/img/cat-2.jpg",
    "https://technext.github.io/eshopper/img/cat-3.jpg",
    "https://technext.github.io/eshopper/img/cat-4.jpg",
    "https://technext.github.io/eshopper/img/cat-5.jpg",
    "https://technext.github.io/eshopper/img/cat-6.jpg",
  ];
  
  return (
    <div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Product Categories</span></h2>
        </div>
        <div class="row px-xl-5 pb-3">
            {
                categories.map((category,index)=>{
                    return(
                      <div class="col-lg-2 col-md-6 pb-1">
                          <div class="cat-item d-flex flex-column mb-4 category-border" style={{padding: "30px",backgroundColor : "#fff"}}>
                              <p class="text-right">15 Products</p>
                              <a href="" class="cat-img position-relative overflow-hidden mb-3">
                                  <img className="img-fluid" src={images[index]} alt=""/>
                              </a>
                              <h5 class="font-weight-semi-bold m-0 text-center">{category}</h5>
                          </div>
                      </div>                
                    )
                })
            }        
        </div>
      </div>
        
    
  );
}
