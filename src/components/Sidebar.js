// import Card from "./Card.js";
import React, { useState } from 'react';
// import Content1 from './Content1';
// import MainContent from "./MainContent.js";


function Sidebar(props) {

    return (

        // <nav id="sidebarMenu" className="col-md-2 col-lg-2 d-lg-block bg-light sidebar collapse float-md-end"  >
        //     <div className="position-sticky pt-3" >
        //         <h4 style={{ textAlign: "center" }}>Categories</h4>

        <ul class="nav flex-column"  style={{ "backgroundColor": "#ece5dd" }}  >
            <li class="nav-item" style={{ border: "1px dotted #6E260E", borderRadius: "10px" }}>
                <div>
                    <button class="nav-link" style={{ fontSize: "25px",color:"ActiveBorder" ,"textAlign":"center"}} onClick={props.onClick} >

                        <img src={props.img} alt="Image 1" style={{ "height": "140px", "width": "210px", "paddingRight": "50px", "paddingLeft": "0.0px", float: "left" }} />

                        <b style={{"fontSize":"24px","color":"#6E260E","TextAlign":"center"}}>{props.title}</b>
                        <br />


                    </button>
                </div>


                {/* </button> */}
            </li>
        </ul>
    );
};

export default Sidebar;