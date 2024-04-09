import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{"backgroundColor":"#d9ccb7",}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="" style={{ "display": "flex", "paddingLeft": "620px" }}>
                    {/* ------LOGO------ */}
                    <img src='MainLogo.png' style={{ "display": "flex" }} alt="logo" width="300" height="70" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarNav" >
                    
                </div>
                
                
            </div>
            
        </nav>
        

    );
};

export default Navbar;