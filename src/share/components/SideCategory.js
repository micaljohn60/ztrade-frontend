import { Link } from "react-router-dom"

export default function SideCategory(){
    return (
        <>
        <div class="col-lg-3 d-none d-lg-block ">
                <a class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: '65px', marginTop: '-1px',}}>
                    <h6 class="m-0 text-white">Store</h6>
                    <i class="fa fa-angle-down text-white"></i>
                </a>
                <nav class="collapse  show navbar navbar-vertical navbar-light align-items-start p-0" id="navbar-vertical">
                    <div class="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                        <div class="nav-item dropdown">
                            <Link to="/store/detail" class="nav-link" data-toggle="dropdown">THome (10)<i class="fa fa-angle-down float-right mt-1"></i></Link>
                            {/* <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="" class="dropdown-item">Men's Dresses (5)</a>
                                <a href="" class="dropdown-item">Women's Dresses(3)</a>
                                <a href="" class="dropdown-item">Baby's Dresses(2)</a>
                            </div> */}
                        </div>
                        <Link to="/store/detail" class="nav-item nav-link">Remax (20)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Ugreen (12)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Samsung (22)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Apple (11)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Huawei (9)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Vivo (0)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Poko (7)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Techno (9)</Link>
                        <Link to="/store/detail" class="nav-item nav-link">Xiaomi (9)</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}