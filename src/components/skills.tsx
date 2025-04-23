 import React from "react";
import Card from '@mui/material/Card';
import "./skills.css";
import ReactLogoColored from "../assets/React.svg.png";
import JavaScriptLogo from "../assets/JavaScriptLogo.png";
import NodeJsLogo from "../assets/NodeJsLogo.png";
import HtmlLogo from "../assets/HtmlLogo.png";
import CssLogo from "../assets/CssLogo.png";
import TailwindLogo from "../assets/TailwindLogo.png";
import FigmaLogo from "../assets/FigmaLogo.png";
import AdobeLogo from "../assets/AdobeLogo.png";
import PythonLogo from "../assets/PythonLogo.png";
import MongodbLogo from "../assets/MongodbLogo.png";
import Tooltip from '@mui/material/Tooltip';

function Skills() {
    return (
        <div className="skills">
            <Card className="skill-card" sx={{ width: {xl:305, lg:305, md:235, sm:215, xs:441}, backgroundColor: "#F4FBF6", height: 250, borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                <img src={ReactLogoColored} alt="React" className='skill-logo' id="react-logo"/>
                <p className="skill-name">React</p>
                <p className="skill-description">I've been learning React for 6 months now and I'm very passionate about it.</p>
            </Card>
            <Card className="skill-card" sx={{ width: {xl:245, lg:245, md:235, sm:441, xs:441}, backgroundColor: "#F4FBF6", height: 250, borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                <img src={JavaScriptLogo} alt="React" className='skill-logo' />
                <p className="skill-name">JavaScript</p>
                <p className="skill-description">A safe bet, I use vanilla JavaScript every day.</p>
            </Card>
            <Card className="skill-card" sx={{ width: {xl:298, lg:298, md:235, sm:441, xs:441}, backgroundColor: "#F4FBF6", height: 250, borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                <img src={NodeJsLogo} alt="React" className='skill-logo' />
                <p className="skill-name">NodeJs</p>
                <p className="skill-description">While not an expert with it, I have some strong foundations in nodeJs.</p>
            </Card>
            <Card className="skill-card" sx={{ width: {xl:560, lg:560, md:480, sm:441, xs:441}, backgroundColor: "#F4FBF6", height: 250, borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                <div className="logo-container">
                    <img src={HtmlLogo} alt="React" className='skill-logo' />
                    <img src={CssLogo} alt="React" className='skill-logo' id="css-logo"/>
                    <img src={TailwindLogo} alt="React" className='skill-logo' />
                </div>
                <p className="skill-name">HTML & CSS + Tailwind</p>
                <p className="skill-description">My favorite combo for frontend, like many other developers. I use HTML & CSS more than once a day, while Tailwind helps me to get things done fast and qualitatives.</p>
            </Card>
            <div className="multiple-cards">
                {/* Adobe Card with Tooltip */}
                <Tooltip 
                    title="Adobe Illustrator"
                    slotProps={{
                        popper: {
                        modifiers: [
                            {
                            name: 'offset',
                            options: {
                                offset: [0, -34],
                            },
                            },
                        ],
                        },
                    }}>
                    <Card className="skill-card"  sx={{width:{xl:145, lg:145, md:113, sm:102, xs:103    }, height:120, backgroundColor: "#F4FBF6", borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                        <img src={AdobeLogo} alt="Adobe" id="adobe-logo" className='skill-logo-fullCentered' />
                    </Card>
                </Tooltip>
                
                {/* Figma Card with Tooltip */}
                <Tooltip 
                    title="Figma"
                    slotProps={{
                        popper: {
                        modifiers: [
                            {
                            name: 'offset',
                            options: {
                                offset: [0, -34],
                            },
                            },
                        ],
                        },
                    }}>
                    <Card className="skill-card"  sx={{width:{xl:145, lg:145, md:113, sm:102, xs:102}, height:120, backgroundColor: "#F4FBF6", borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                        <img src={FigmaLogo} alt="Figma" className='skill-logo-fullCentered' id="figma-logo"/>
                    </Card>
                </Tooltip>

                {/* Python Card with Tooltip */}
                <Tooltip 
                    title="Python"
                    slotProps={{
                        popper: {
                        modifiers: [
                            {
                            name: 'offset',
                            options: {
                                offset: [0, -23],
                            },
                            },
                        ],
                        },
                    }}>
                    <Card className="skill-card"  sx={{width:{xl:145, lg:145, md:113, sm:102, xs:102}, height:120, backgroundColor: "#F4FBF6", borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                        <img src={PythonLogo} alt="Python" className='skill-logo-fullCentered' id="python-logo"/>
                    </Card>
                </Tooltip>

                {/* MongoDB Card with Tooltip */}
                <Tooltip 
                    title="MongoDB"
                    slotProps={{
                        popper: {
                        modifiers: [
                            {
                            name: 'offset',
                            options: {
                                offset: [0, -23],
                            },
                            },
                        ],
                        },
                    }}>
                    <Card className="skill-card"  sx={{width:{xl:145, lg:145, md:113, sm:102, xs:102}, height:120, backgroundColor: "#F4FBF6", borderRadius: 5, outline: 'none', border: '1px solid #C3E9D7', boxShadow: 'none', position: 'relative', display:"flex", justifyContent:"center", flexDirection:"column", transition:"0.3s","&:hover": {backgroundColor: " #C3E9D7"}}}>
                        <img src={MongodbLogo} alt="MongoDB" className='skill-logo-fullCentered' id="mongodb-logo"/>
                    </Card>
                </Tooltip>
            </div>
        </div>
    );
}

export default Skills;
