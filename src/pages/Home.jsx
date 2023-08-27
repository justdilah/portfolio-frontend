import React  from 'react';
import rectImg from "../assets/Rectangle 3.png";
import gif from "../assets/Nur Dilah 1.gif";
function Home() {

    return (
        <body className="Body-Class">
            <div className="intro-block">
                <img className="intro-rect" src={rectImg} alt="logo" />
                <div className="intro">
                    <div className="crop">
                        <img className="gif" src={gif} alt="dilah_gif" />
                    </div>
                    <div className="intro_inner">
                        <h2><strong>Hello There, I'm <span>Dilah</span></strong></h2>
                        <p>I am a computer science undergraduate at NTU.<br/>My passion lies in <span className="wavy">software development</span> and <span className="wavy">artificial intelligence.</span> </p>
                        <a href={"/document/Main Resume (SWE)_Dilah_NEW.pdf"}><button className="viewmore">View Resume</button></a>
                    </div>
                </div>
            </div>
        </body>

    );

}

export default Home;