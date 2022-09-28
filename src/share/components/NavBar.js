import Slider from "./Slider";

export default function NavBar(){
  return(
    <>
    <div class="container-fluid">
        <div class="row bg-secondary py-2 px-xl-5">
            
            <div class="col-lg-6 text-center text-lg-left">
                <div class="d-inline-flex align-items-center">
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-dark px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-dark pl-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>

            <div class="col-lg-6 d-none d-lg-block text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-dark" href="">Login</a>
                    <span class="text-muted px-2">|</span>
                    <a class="text-dark" href="">Register</a>
                 
                </div>
            </div>



        </div>
        <div class="row align-items-center py-3 px-xl-5 " style={{backgroundColor : "#D4D9EB"}}>
            <div class="col-lg-3 d-none  d-flex">

                <svg width="50" height="50" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 0L45.5421 8.85714L62 15.5L60.0841 31L62 46.5L45.5421 53.1429L31 62L16.4581 53.1429L0 46.5L1.91607 31L0 15.5L16.4581 8.85714L31 0Z" fill="#1B458D"/>
                    <path d="M49.7858 31.0001C49.7858 39.5497 42.0879 47.7242 31.0001 47.7242C19.9122 47.7242 12.2144 39.5497 12.2144 31.0001C12.2144 22.4504 19.9122 14.2759 31.0001 14.2759C42.0879 14.2759 49.7858 22.4504 49.7858 31.0001Z" fill="#D9D9D9" stroke="white" stroke-width="20"/>
                    <ellipse cx="30.9999" cy="30.9999" rx="17.7143" ry="16.0345" fill="#1B458D"/>
                </svg>

                <a href="" class="text-decoration-none">
                    <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-secondary font-weight-bold  px-3 mr-1">Z</span>Trade</h1>
                </a>
            </div>
            <div class="col-lg-6 col-6 text-left">
                <form action="">
                    <div class="input-group input-lg border border-primary">
                        <input type="text" class="form-control input-lg" placeholder="Search for products" style={{height : "50px"}}/>
                        <div class="input-group-append">
                            <span class="input-group-text bg-primary text-primary">
                                <i class="fa fa-search fa-xl"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3 col-6 text-right">
                <a href="" class="btn ">
                    <i class="fas fa-heart text-secondary"></i>
                    <span class="badge">0</span>
                </a>
                {/* <a href="" class="btn border">
                    <i class="fas fa-shopping-cart text-primary"></i>
                    <span class="badge">0</span>
                </a> */}
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row border-top px-xl-5">
            {/* <div class="col-lg-3 d-none d-lg-block">
                <a class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: '65px', marginTop: '-1px', padding: '0 30px'}}>
                    <h6 class="m-0">Categories</h6>
                    <i class="fa fa-angle-down text-dark"></i>
                </a>
                <nav class="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                    <div class="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link" data-toggle="dropdown">Dresses <i class="fa fa-angle-down float-right mt-1"></i></a>
                            <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="" class="dropdown-item">Men's Dresses</a>
                                <a href="" class="dropdown-item">Women's Dresses</a>
                                <a href="" class="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href="" class="nav-item nav-link">Shirts</a>
                        <a href="" class="nav-item nav-link">Jeans</a>
                        <a href="" class="nav-item nav-link">Swimwear</a>
                        <a href="" class="nav-item nav-link">Sleepwear</a>
                        <a href="" class="nav-item nav-link">Sportswear</a>
                        <a href="" class="nav-item nav-link">Jumpsuits</a>
                        <a href="" class="nav-item nav-link">Blazers</a>
                        <a href="" class="nav-item nav-link">Jackets</a>
                        <a href="" class="nav-item nav-link">Shoes</a>
                    </div>
                </nav>
            </div> */}
            {/* <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" class="text-decoration-none d-block d-lg-none">
                        <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a href="index.html" class="nav-item nav-link active">Home</a>
                            <a href="shop.html" class="nav-item nav-link">Shop</a>
                            <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" class="dropdown-item">Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <div class="navbar-nav ml-auto py-0">
                            <a href="" class="nav-item nav-link">Login</a>
                            <a href="" class="nav-item nav-link">Register</a>
                        </div>
                    </div>
                </nav>


            </div> */}
        </div>
    </div>
    </>
  )
}