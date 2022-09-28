import ztradeLogo from "../../images/Logo.svg" 

export default function Register() {
    return (
        <div className="register-container">
            <div className="register-custom-form">
                
                <div className="row">
                <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="register-heading">Create new Account<span className="full-stop">.</span></h1>
                                <h3 className="register-subheading">Already a Member ?<span className="link"><a href="">&nbsp;&nbsp;&nbsp; Login</a></span></h3>
                            </div>
                        </div>
                    <div className="webflow-style-input">
                        <input className="" type="text" placeholder="First Name"></input>
                        <input className="" type="text" placeholder="Last Name"></input>
                    </div>       
                    <div className="webflow-style-input">
                        <input className="" type="text" placeholder="Factory Name"></input>
                    </div>         
                    <div className="webflow-style-input">
                        <input className="" type="email" placeholder="example123@gmail.com"></input>
                    </div>  
                    <div className="webflow-style-input">
                        <input className="" type="password" placeholder="Password"></input>
                    </div>       
                    <div className="webflow-style-input">
                        <input className="" type="text" placeholder="Re-Type password"></input>
                    </div> 
                    
                    
                    <div className="register-buttons">
                        <div className="cancel">
                            <button className="">Go back </button>
                        </div>
                        <div className="submit">
                            <button className="">Create account</button>
                        </div>
                        
                    </div> 
                </div>

                <div className="col-lg-6 ">
                    <div className="register-mission">
                        <img src={ztradeLogo}/>
                        <h1>Our Vision</h1>
                        <span>
                            To Become one of the best trading companies in Myanmar's industrial world.
                        </span>
                    </div>
                        
                </div>
                </div>
            </div>
        </div>
    )
}