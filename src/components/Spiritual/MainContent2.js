import React, { useState } from 'react';
import Content1 from './Content1'
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
const SpiritualData = require('./spiritual.json');

 // Import other content components

const MainContent2 = () => {
    const [activeContent, setActiveContent] = useState('content1');

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (

        
        <div style={{ "padding": "1px" }}>
            <br/>
            <h2><u>Spiritual Destinations</u></h2>
        <br/>
   
        <button className="image-button" onClick={() => handleContentChange('content1')} style={{ "margin-right": "5px", "margin-left": "-1px","height":"200px", "background-image": "url('assets/ajmer2.jpg')"}} >
                <img src="" alt="" /> 
            </button>

            
            <button className="image-button" onClick={() => handleContentChange('content2')} style={{ "margin-right": "5px", "margin-left": "-1px" ,"width":"200px","height":"200px", "background-image": "url('assets/haridwar2.jpg')"}} >
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content3')} style={{ "margin-right": "5px", "margin-left": "-1px","width":"200px","height":"200px", "background-image": "url('assets/rishikesh3.jpg')"}}>
                <img src="" alt="" />
            </button>

             <button className="image-button" onClick={() => handleContentChange('content4')} style={{ "margin-right": "5px", "margin-left": "-1px","width":"200px","height":"200px", "background-image": "url('assets/amritsar2.jpg')"}}>
                <img src="" alt="" />
            </button>

            <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px","width":"200px","height":"200px", "background-image": "url('assets/basilica bom jesus church2.jpg')"}}>
                <img src="" alt="" />
            </button> 

            {/* <button className="image-button" onClick={() => handleContentChange('content5')} style={{ "margin-right": "5px", "margin-left": "-1px" ,"width":"200px","height":"300px", "background-image": "url('assets/chittorgrah1.jpg')"}}>
                <img src="" alt="" />
            </button>  */}

            {activeContent === 'content1' && <Content1  title={SpiritualData[4].title5} desc={SpiritualData[4].content5} />}
            {activeContent === 'content2' && <Content2  title={SpiritualData[0].title1} desc={SpiritualData[0].content1} />}
            {activeContent === 'content3' && <Content3  title={SpiritualData[2].title3} desc={SpiritualData[2].content3}/>}  
            {activeContent === 'content4' && <Content4  title={SpiritualData[1].title2} desc={SpiritualData[1].content2}/>}
            {activeContent === 'content5' && <Content5  title={SpiritualData[5].title6} desc={SpiritualData[5].content6} />}
            {/* {activeContent === 'content5' && <Content5 />} */}

        </div>
    );
};

export default MainContent2;
