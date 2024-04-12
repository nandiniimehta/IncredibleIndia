import React, { useState } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
const UnionData = require('./union_ter.json');


const MainContent4 = () => {
    const [activeContent, setActiveContent] = useState('content1');

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (


        <div style={{ "padding": "1px" }}>
            <br />
            <h2><u>Union Territories</u></h2>
            <br />

            <button className="image-button" onClick={() => handleContentChange('content1')} style={{ "margin-right": "5px", "margin-left": "-1px", "height": "200px", "background-image": "url('assets/andaman-nicobar2.jpg')" }} >
                <img src="" alt="" />
            </button>


            <button className="image-button" onClick={() => handleContentChange('content2')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/daman-dadra1.jpg')" }} >
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content3')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/goa1.jpg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content4')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/ladakh1.jpg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/puducherry1.jpg')" }}>
                <img src="" alt="" />
            </button>
            {/* 
            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px" ,"width":"200px","height":"300px", "background-image": "url('assets/chittorgrah1.jpg')"}}>
                <img src="" alt="" />
            </button> */}

            {activeContent === 'content1' && <Content1 title={UnionData[0].title1} desc={UnionData[0].content1} />}
            {activeContent === 'content2' && <Content2 title={UnionData[1].title2} desc={UnionData[1].content2} />}
            {activeContent === 'content3' && <Content3 title={UnionData[2].title3} desc={UnionData[2].content3} />}
            {activeContent === 'content4' && <Content4 title={UnionData[3].title4} desc={UnionData[3].content4} />}
            {activeContent === 'content5' && <Content5 title={UnionData[4].title5} desc={UnionData[4].content5} />}
        </div>
    );
};

export default MainContent4;
