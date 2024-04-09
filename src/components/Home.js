import MainContent from "./Heritage/MainContent";
// import Content2 from "./Content2";
import MainContent2 from "./Spiritual/MainContent2";
import MainContent3 from "./Popular/MainContent3";
import MainContent4 from "./Union & Territories/MainContent4";
import MainContent5 from "./Landscape/MainContent5";
import Sidebar from "./Sidebar";
import React, { useState } from 'react';
// import Content3 from "./Content3"
    ;
const Home = () => {
    const [activeContent, setActiveContent] = useState('');
    const [showVideo, setShowVideo] = useState(true);

    const handleContentChange = (content) => {
        setActiveContent(content);
        setShowVideo(content !== 'content1' && content !== 'content2' && content !== 'content3' && content!=='content4' && content!=='content5');
    };

    return (

        <div style={{ display: 'grid', gridTemplateColumns: '4fr 0.1fr', "position": "relative", "backgroundColor":"#ece5dd"}}>
            <div style={{ backgroundColor: '#ece5dd', 'width': '85%', "paddingLeft": "15px", "textAlign": "center" }}>

                {/* --------- Video -----------------*/}
                {showVideo && (
                    <>
                        <div style={{ "margin-top": "-15px" }}>
                            <video controls width="1300" style={{ 'height': '850px', "preload": "auto", loop: "loop" }} autoplay muted>
                                <source src="assets\Cultural Tourism.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </>
                )}


                {activeContent === 'content1' && <MainContent />}
                {activeContent === 'content2' && <MainContent2 />}
                {activeContent === 'content3' && <MainContent3 />}
                {activeContent == 'content4' && <MainContent4 />}
                {activeContent == 'content5' && <MainContent5 />}
            </div>

            <div style={{ backgroundColor: '#ece5dd', 'width': '25%', "paddingLeft": "1850px", "textAlign": "center",'position':'fixed', }}>
                <nav id="sidebarMenu" className="col-md-2 col-lg-2 d-lg-block sidebar collapse float-md-end" style={{'height':'850px',"backgroundColor":"#ece5dd"}} >
                    <div className="position-sticky pt-3" style={{"backgroundColor":"#ece5dd"}}>
                        <h4 style={{ textAlign: "center","backgroundColor":"#ece5dd" }}>Categories</h4>
                        <ul class="nav flex-column" style={{"backgroundColor":"#ece5dd","paddingBottom":"1000px"}} >
                            <Sidebar onClick={() => handleContentChange('content1')} img="assets/tirupati1.jpg" title="Heritage"  />
                            <Sidebar onClick={() => handleContentChange('content2')} img="assets/varanasi2.jpg" title="Spiritual" />
                            <Sidebar onClick={() => handleContentChange('content3')} img="assets/taj-mahal3.jpg" title="Popular" />
                            <Sidebar onClick={() => handleContentChange('content4')} img="assets/andaman-nicobar1.jpg" title="Union & Territory" />
                            <Sidebar onClick={() => handleContentChange('content5')} img="assets/ladakh1.jpg" title="Lands-capes" />
                        </ul>
                    </div>
                
                </nav>
            </div>
        </div>

    );
}
export default Home