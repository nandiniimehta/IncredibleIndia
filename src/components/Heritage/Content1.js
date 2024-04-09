import React from 'react';

function Content1(props) {
    // console.log(props.title1);
    return (
        <>
            <div style={{ "paddingLeft": "10px", "width": "90%" }}>
                <br />
                <h1 style={{ "textAlign": "center", "fontSize": "28px", "color": "#6E260E" }}><b>{props.title}</b></h1>
                <br />

                {/* ---main div---- */}
                <div class="container">
                    {/* ---first div--- */}
                    <div class="left-div">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000" style={{ "paddingLeft": "30px", "textAlign": "center" }}>
                            <div class="carousel-inner" >
                                <div class="carousel-item active" >
                                    <img src='assets/tirupati1.jpg' class="d-block" alt="..." style={{ "height": "500px", "width": "600px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src="assets/tirupati2.jpg" class="d-block" alt="..." style={{ "height": "500px", "width": "600px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src='assets/tirupati3.jpg' class="d-block" alt="..." style={{ "height": "500px", "width": "600px" }} />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    {/* =-- secon div---- */}
                    <div class="right-div">
                        <p style={{ "font-size": " 18px", "line-height": "1.5", "text-align": "left", "marginRight": "50px", "marginLeft": "25px" }}>{props.desc}</p>


                    </div>
                </div>



                <br />
                {/* <img src='assets/tirupati1.jpg' alt='tirupati' height='200px' /> */}


            </div>
        </>
    );
}

export default Content1;