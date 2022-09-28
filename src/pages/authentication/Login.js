import ztradeLogo from "../../images/login-logo.svg" 

export default function Login() {
    return (
        <div className="register-container">
            <div className="register-custom-form">
                
                <div className="row">
                <div className="col-lg-12">
                    <img src={ztradeLogo} className='mb-4'/>
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="login-heading">Log in to Z Trade<span className="full-stop">  </span></h1>
                                <h3 className="register-subheading">Don't have an account?<span className="link"><a href="">&nbsp;&nbsp;&nbsp; Register Here</a></span></h3>
                            </div>
                        </div>            
                    <div className="webflow-style-input">
                        <input className="" type="email" placeholder="example123@gmail.com"></input>
                    </div>  
                    <div className="webflow-style-input">
                        <input className="" type="password" placeholder="Password"></input>
                    </div>       
                    
                    
                    <div className="register-buttons">
                        <div className="cancel">
                            <button className="">Go back </button>
                        </div>
                        <div className="submit">
                            <button className="">Log in</button>
                        </div>
                        
                    </div> 
                </div>

                {/* <div className="col-lg-6 ">
                    <div className="register-mission">
                        <img src={ztradeLogo}/>
                        <h1>Our Vision</h1>
                        <span>
                            To Become one of the best trading companies in Myanmar's industrial world.
                        </span>
                    </div>
                        
                </div> */}
                </div>
            </div>
        </div>
    )
}