import React  from 'react';
import rectImg from "../assets/Rectangle 3.png";
import photo from "../assets/passport_dilah.png";
import Option from "../components/Option";
import Experience_Rectangles from "../components/Experience_Rectangles";
import Competition_Rectangles from "../components/Competition_Rectangles";
function AboutMe() {
    const progLang = ["Python","Java"];
    const hobbies = ["Drawing","Listening to music"];

    return (
        <>
        <div className="Body-Class">
            <div className="intro-block">
                <img className="intro_rect" src={rectImg} alt="background" />
                <div className="intro">
                    <div className="crop">
                        <img className="passport_photo" src={photo} alt="dilah_gif" />
                    </div>
                    <div className="inner_div">
                        <h2><strong>About <span>Me</span></strong></h2>
                        <p>An undergraduate in computer science with a strong passion for software development and artificial intelligence who aims to produce innovative software solutions for users. <br/>Enjoys programming</p>
                        <p><strong>Top Programming Languages For Me</strong></p>
                        <div className="tags-div">
                            {progLang.map((item) => (
                                <>
                                    <Option option={item}/>
                                </>
                            ))}
                        </div>
                        <br/>
                        <p><strong>Hobbies</strong></p>
                        <div className="tags-div">
                            {hobbies.map((item) => (
                                <>
                                    <Option option={item}/>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="competition-heading">
            <span><strong>Experiences</strong></span>
        </div>
        <div className="competitions">
                <Experience_Rectangles />
        </div>
        <div className="competition-heading">
            <span><strong>Competitions</strong></span>
        </div>
            <Competition_Rectangles />
        </>
    );

}

export default AboutMe;