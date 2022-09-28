import { Grid,Card } from "@mui/material"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TopSellingProduct from "../../components/top_selling_product/TopSellingProduct";
import NavBar from "../../share/components/NavBar";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ProductDetail() {
    return (
        <>
        <NavBar/>
            <div class="container-fluid " style={{backgroundColor : "#EDF1FF"}}>
            <div class="row px-xl-5 border border-top">
            <div class="col-lg-5 pb-5 mt-3">
                <div id="product-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner border">
                        <div class="carousel-item active">
                            <img class="w-100 h-100" src="https://technext.github.io/eshopper/img/cat-1.jpg" alt="Image"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100 h-100" src="https://technext.github.io/eshopper/img/cat-2.jpg" alt="Image"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100 h-100" src="https://technext.github.io/eshopper/img/cat-3.jpg" alt="Image"/>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100 h-100" src="https://technext.github.io/eshopper/img/cat-4.jpg" alt="Image"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i class="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i class="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div class="col-lg-7 pb-5 mt-5">
                <h3 class="font-weight-semi-bold">Colorful Stylish Shirt</h3>

                <h3 class="font-weight-semi-bold mb-4">150.00 MMK</h3>
                <p class="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                

            </div>
        </div>

                <TopSellingProduct title="Related Items"/>
            </div>
        </>
    )
}