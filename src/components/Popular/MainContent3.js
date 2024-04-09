import React, { useState } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
const PopularData = require('./popular.json');



const MainContent3 = () => {
    const [activeContent, setActiveContent] = useState('');

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (


        <div style={{ "padding": "1px" }}>
            <br />
            <h2><u>Popular Destinations</u></h2>
            <br />

            <button className="image-button" onClick={() => handleContentChange('content1')} style={{ "margin-right": "5px", "margin-left": "-1px", "height": "200px", "background-image": "url('assets/taj-majal1.jpg')" }} >
                <img src="" alt="" />
            </button>


            <button className="image-button" onClick={() => handleContentChange('content2')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/mumbai2.jpg')" }} >
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content3')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/varanasi1.jpg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content4')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/kolkata1.jpg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/chennai2.jpg')" }}>
                <img src="" alt="" />
            </button>
            
            {/* <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px" ,"width":"200px","height":"200px", "background-image": "url('assets/chittorgrah1.jpg')"}}>
                <img src="" alt="" />
            </button> */}

            {activeContent === 'content1' && <Content1 title={PopularData[1].title2} desc={PopularData[1].content2} />}
            {activeContent === 'content2' && <Content2 title={PopularData[5].title6} desc={PopularData[5].content6} />}
            {activeContent === 'content3' && <Content3 title={PopularData[2].title3} desc={PopularData[2].content3}/>} 
            {activeContent === 'content4' && <Content4 title={PopularData[4].title5} desc={PopularData[4].content5}/>}
            {activeContent === 'content5' && <Content5 title={PopularData[3].title4} desc={PopularData[3].content4} />}
        </div>
    );
};

export default MainContent3;
