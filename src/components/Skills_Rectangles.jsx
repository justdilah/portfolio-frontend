import React  from 'react';
import skills_rect from "../assets/Skills_Rectangle.png";

function Skills_Rectangles() {

    return (
        <>
            <div className="skills-div">
                <img className="skills-rect" src={skills_rect}/>
                <div className="skills-inner">
                    <p>💻 <strong>Programming Languages</strong></p>
                    <hr/>
                    <div className="badges">
                        <img alt="CSS" src="https://img.shields.io/badge/CSS-000000.svg?logo=css3&logoColor=white"/>
                        <img alt="HTML" src="https://img.shields.io/badge/HTML-000000.svg?logo=html5&logoColor=white"/>
                        <img alt="Java" src="https://img.shields.io/badge/Java-000000.svg?logo=java&logoColor=white"/>
                        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-000000.svg?logo=javascript&logoColor=white"/>
                        <img alt="Node.js" src="https://img.shields.io/badge/Node.js-000000.svg?logo=node.js&logoColor=white"/>
                        <img alt="PHP" src="https://img.shields.io/badge/PHP-000000.svg?logo=php&logoColor=white"/>
                        <img alt="Python" src="https://img.shields.io/badge/Python-000000.svg?logo=python&logoColor=white"/>
                        <img alt="SQL" src="https://custom-icon-badges.herokuapp.com/badge/SQL-000000.svg?logo=database&logoColor=white"/>
                    </div>
                </div>
            </div>
            <div className="skills-div">
                <img className="skills-rect" src={skills_rect}/>
                <div className="skills-inner">
                    <p>🛠️ <strong>Software and Tools</strong></p>
                    <hr/>
                    <div className="badges">
                        <img alt="Firebase" src="https://img.shields.io/badge/Firebase-000000?logo=Firebase&logoColor=white"/>
                        <img alt="Mongo DB" src="https://img.shields.io/badge/MongoDB-000000.svg?logo=mongodb&logoColor=white"/>
                        <img alt="MySQL" src="https://img.shields.io/badge/MySQL-000000.svg?logo=mysql&logoColor=white"/>
                        <img alt="Git" src="https://img.shields.io/badge/Git-000000.svg?logo=git&logoColor=white"/>
                        <img alt="Jupyter" src="https://img.shields.io/badge/Jupyter-000000.svg?logo=Jupyter&logoColor=white"/>
                        <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-000000.svg?logo=visual-studio-code&logoColor=white"/>
                    </div>
                </div>
            </div>
            <div className="skills-div">
                <img className="skills-rect" src={skills_rect}/>
                <div className="skills-inner">
                    <p>🖌️ <strong>Design Tools</strong></p>
                    <hr/>
                    <div className="badges">
                        <img alt="Figma" src="https://img.shields.io/badge/figma-000000.svg?logo=figma&logoColor=white"/>
                        <img alt="Adobe Premiere pro" src="https://img.shields.io/badge/Adobe%20Premiere%20Pro-000000.svg?logo=Adobe%20Premiere%20Pro&logoColor=white"/>
                        <img alt="Adobe Photoshop" src="https://img.shields.io/badge/adobe%20photoshop-000000.svg?logo=adobe%20photoshop&logoColor=white"/>
                        <img alt="Adobe Illustrator" src="https://img.shields.io/badge/adobe%20illustrator-000000.svg?logo=adobe%20illustrator&logoColor=white"/>
                    </div>
                </div>
            </div>
            <div className="skills-div">
                <img className="skills-rect" src={skills_rect}/>
                <div className="skills-inner">
                    <p>🖌️ <strong>📚 Frameworks, Platforms and Libraries</strong></p>
                    <hr/>
                    <div className="badges">
                        <img alt="Node.js" src="https://img.shields.io/badge/node.js-000000?logo=node.js&logoColor=white"/>
                        <img alt="React" src="https://img.shields.io/badge/react-000000?logo=react&logoColor=%2361DAFB"/>
                        <img alt="JQuery" src="https://img.shields.io/badge/jquery-000000?logo=jquery&logoColor=white"/>
                        <img alt="Flask" src="https://img.shields.io/badge/flask-000000?logo=flask&logoColor=white"/>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Skills_Rectangles;