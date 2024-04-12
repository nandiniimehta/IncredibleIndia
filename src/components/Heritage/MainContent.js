import React, { useState } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
const HeritageData = require('./heritage.json');


const MainContent = () => {
    // console.log("HeritageData:", HeritageData); // Ensure HeritageData has the correct structure
    // console.log("HeritageDatatitle", HeritageData[0].title1); 

    const [activeContent, setActiveContent] = useState('content1');

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (


        <div style={{ "padding": "1px" }}>
            <br />
            <h2><u>Heritage Destinations</u></h2>
            <br />

            <button className="image-button" onClick={() => handleContentChange('content1')} style={{ "margin-right": "5px", "margin-left": "-1px", "height": "200px", "background-image": "url('assets/tirupati1.jpg')" }} >
                <img src="" alt="" />
            </button>
           

            <button className="image-button" onClick={() => handleContentChange('content2')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/jaipur2.jpg')" }} >
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content3')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/mahabalipuram2.jpg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content4')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/jodhpur1.jpg')" }}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px", "width": "200px", "height": "200px", "background-image": "url('assets/khajuraho2.jpg')" }}>
                <img src="" alt="" />
            </button>
            {/* 
            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px" ,"width":"200px","height":"300px", "background-image": "url('assets/chittorgrah1.jpg')"}}>
                <img src="" alt="" />
            </button> */}

            {/* {activeContent === 'content1' && <Content1 />} */}
            {activeContent === 'content1' && <Content1  title={HeritageData[0].title1} desc={HeritageData[0].content1} />}
            {activeContent === 'content2' && <Content2  title={HeritageData[2].title3} desc={HeritageData[2].content3} />}
            {activeContent === 'content3' && <Content3  title={HeritageData[1].title2} desc={HeritageData[1].content2}/>}
            {activeContent === 'content4' && <Content4  title={HeritageData[3].title4} desc={HeritageData[3].content4}/>}
            {activeContent === 'content5' && <Content5  title={HeritageData[4].title5} desc={HeritageData[4].content5} />}

        </div>
    );
};

export default MainContent;
