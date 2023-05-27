import React  from 'react';
import project_rect from "../assets/project_rect.png";
import Option from "./Option";
import {Link, useNavigate} from "react-router-dom";


function Projects_Rectangles(props) {
    const navigate = useNavigate();

    if (props.name === "undefined") {
        return <h1>Loading</h1>
    }
    const myArray = props.tagString.split(";");

    return (
            <div className="project-div">
                <img onLoad={() => console.log('LOADED')} src={project_rect}/>
                <div className="project-inner">
                    <div className="crop-project">
                        <img className="project-img" src={"/thumbnails/" + props.image}/>
                    </div>
                    <br/>
                    <p><strong>{props.name}</strong></p>
                    <div className="tags-div">
                        {myArray.map((item, index) => (
                            <>
                                <Option key={item} option={item}/>
                            </>
                        ))}
                    </div>
                    <button className="viewmore" onClick={() => {
                        navigate("/project/" + props.name);
                    }}>View More</button>
                </div>
            </div>
    );

}

export default Projects_Rectangles;