import React from 'react';
import HeritageContent from './HeritageContent.js';

import MainContent from './MainContent.js';
// const HeritageData = require('./heritage.json');


function Content1(props) {
    console.log(props.data);
    return (
        <>
  
            <div style={{ "paddingLeft": "10px", "width": "90%" }}>
                <br />
                <h1 style={{ "textAlign": "center" }}><b><u>{props.title}</u></b></h1>
                <br />
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style={{ "paddingLeft": "30px", "textAlign": "center" }}>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src='assets/tirupati1.jpg' class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="assets/tirupati2.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src='assets/tirupati3.jpg' class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
                {/* <img src='assets/tirupati1.jpg' alt='tirupati' height='200px' /> */}
                    <p style={{ "font-size": " 18px", "line-height": "1.5", "text-align": "left", "marginRight": "50px","marginLeft":"25px" }}>{props.desc}</p> 


            </div>
        </>
    );
}

export default Content1;