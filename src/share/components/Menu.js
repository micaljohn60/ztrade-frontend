import SideCategory from "./SideCategory";
import Slider from "./Slider";
import { Link } from "react-router-dom";

export default function Menu({ }) {
  return (
    <>

      <div className="custom-container-fluid ">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 ">

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
              <div className="dd">
                <button className="dropbtn"><i className="fa-solid fa-list pr-3 text-white"></i>
                  <span className="text-white font-weight-bold">Categories</span>
                  <i className="fa fa-caret-down pl-2 pr-5 text-white"></i>
                </button>
                <div className="dropdown-content">
                  <div className="row text-justify">
                    <div className="col-lg-2 link pl-5">
                      <Link to="/category/detail" className="link">Appliances</Link>
                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Apps & Games</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Arts, Crafts, & Sewing</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Automotive Parts & Accessories</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Beauty & Personal Care</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">BoCDs & Vinyloks</Link>

                    </div>
                    <div class="col-lg-2 link pl-5">
                      <Link to="/category/detail" className="link">Cell Phones & Accessories</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Collectibles & Fine Art</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Computers</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Garden & Outdoor</Link>

                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Grocery & Gourmet Food</Link>
                    </div>
                    <div class="col-lg-2 link">
                      <Link to="/category/detail" className="link">Handmade</Link>

                    </div>
                    <div class="col-lg-2 link pl-5">
                      <Link to="/category/detail" className="link">Health, Household</Link>
                    </div>

                  </div>
                </div>
              </div>

              {/* <div className="nav-item dropdown" style={{ width: "300px" }}>
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
              </div> */}



              <Link to="/" className="nav-item nav-link active font-weight-bold">Home</Link>
              <Link to="/favourites" className="nav-item nav-link text-white font-weight-bold">Favourites</Link>
              <Link to="/" className="nav-item nav-link text-white font-weight-bold" data-toggle="tooltip" data-placement="top" title="Please Login to Chat with us">Live Chat</Link>
              <Link to="/store/detail" className="nav-item nav-link text-white font-weight-bold">Store</Link>
              <div className="notification nav-item nav-link font-weight-bold">
                <span className="text-white font-weight-bold">Notifications</span>
                <div className="notification-content">
                  <a className="d-flex justify-content-start align-items-center">
                      <i className="fa-solid fa-bell text-secondary"></i>
                      <p className="text-black ml-3">Don't miss out Thindingyut promotions</p>
                    </a>
                    <a className="d-flex justify-content-start">
                      <i className="fa-solid fa-bell text-secondary"></i>
                      <p className="text-black ml-3">Check out whats THome's Special Offers</p>
                    </a>
                    <a className="d-flex justify-content-start">
                      <i className="fa-solid fa-bell text-secondary"></i>
                      <p className="text-black ml-3">Server Maintainces Alert : We will have some upgrade on out website.</p>
                    </a>
                </div>
              </div>

            </div>
            {/* <div className="navbar-nav ml-auto py-0">
                    <a href="" className="nav-item nav-link">Login</a>
                    <a href="" className="nav-item nav-link">Register</a>
                </div> */}
          </div>
        </nav>
        {/* <Slider/> */}

      </div>
    </>
  )
}