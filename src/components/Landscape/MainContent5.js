import React, { useState } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
const Landscapes = require('./landscapes.json');

// Import other content components

const MainContent5 = () => {
    const [activeContent, setActiveContent] = useState('content1');

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (


        <div style={{ "padding": "1px" }}>
            <br />
            <h2><u>Landscapes</u></h2>
            <br />

            <button className="image-button" onClick={() => handleContentChange('content1')} style={{ "margin-right": "5px", "margin-left": "-1px", "height": "200px", "background-image": "url('assets/lake1.jpg')" }} >
                <img src="" alt="" />
            </button>


            <button className="image-button" onClick={() => handleContentChange('content2')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/mountain1.jpeg')" }} >
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content3')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/beaches1.jpeg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content4')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/desert2.jpg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/hillstation1.jpeg')" }}>
                <img src="" alt="" />
            </button>
            {/* 
            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px" ,"width":"200px","height":"300px", "background-image": "url('assets/chittorgrah1.jpg')"}}>
                <img src="" alt="" />
            </button> */}

            {activeContent === 'content1' && <Content1 title={Landscapes[0].title1} desc={Landscapes[0].content1} />}
            {activeContent === 'content2' && <Content2 title={Landscapes[1].title2} desc={Landscapes[1].content2} />}
            {activeContent === 'content3' && <Content3 title={Landscapes[2].title3} desc={Landscapes[2].content3} />}
            {activeContent === 'content4' && <Content4 title={Landscapes[3].title4} desc={Landscapes[3].content4} />}
            {activeContent === 'content5' && <Content5 title={Landscapes[4].title5} desc={Landscapes[4].content5} />}
        </div>
    );
};

export default MainContent5;
