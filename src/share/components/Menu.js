import SideCategory from "./SideCategory";
import Slider from "./Slider";


export default function Menu(){
    return(
        <>
       
        <div className="col-lg-12">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">

                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;

                    <div className="nav-item dropdown" style={{width : "300px"}}>
                        <a href="#" className="nav-link text-black bg-secondary text-center" data-toggle="dropdown">
                        <i class="fa-solid fa-list mr-3"></i>
                            
                            Categories</a>
                        <div className="dropdown-menu rounded-0 m-0 ">
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link" data-toggle="dropdown">Dresses <i class="fa fa-angle-down float-right mt-1"></i></a>
                            <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="" class="dropdown-item">Men's Dresses</a>
                                <a href="" class="dropdown-item">Women's Dresses</a>
                                <a href="" class="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                            
                            <a href="cart.html" className="dropdown-item">Electronic</a>
                            <a href="checkout.html" className="dropdown-item">Health Care</a>
                        </div>
                    </div>
                    
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    
                    
                    <a href="shop.html" className="nav-item nav-link text-white">Favourites</a>
                    <a href="detail.html" className="nav-item nav-link text-white">Live Chat</a>
                    <a href="detail.html" className="nav-item nav-link text-white">Notifications</a>
                </div>
                {/* <div className="navbar-nav ml-auto py-0">
                    <a href="" className="nav-item nav-link">Login</a>
                    <a href="" className="nav-item nav-link">Register</a>
                </div> */}
            </div>
        </nav>
        <Slider/>

     </div>
        </>
    )
}