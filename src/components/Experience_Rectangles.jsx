import React from "react";
import rect from "../assets/Rectangle 5.png";
import {InfinitySpin} from "react-loader-spinner";
import {baseURL} from "../services/Constants";
import {useNavigate} from "react-router-dom";
function Experience_Rectangles(){
    const navigate = useNavigate();

    const [data, setData] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState();

    // React will not wait till the data has been loaded
    React.useEffect(() => {
        fetch(baseURL + "/experiences")
            .then(res=> res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            }).catch(error => setError(error))

    }, []);

    if(loading)
        return (
            <div style={{"padding-left":"150px"}}><InfinitySpin width='400' color="#527087"/></div>
        );

    if(error)
        return (
            <div className="competitions">
                Error
                <br/>
                <a href="/"><button className="viewmore">Return to Website</button></a>
            </div>
        );

    return (
        <div className="competitions">
            {
                data.map((item) => (
                    <div className="project-div">
                        <img className="abtme-rect"src={rect}/>
                        <div className="project-inner">
                            <p className="company"><strong>{item.CompanyName}</strong></p>
                            <p><strong>{item.JobPosition}</strong></p>
                            <p>{item.Period}</p>
                            <button className="viewmore" onClick={() => {
                                navigate("/experience/"+ item.CompanyName);
                            }}>View More</button>
                        </div>
                    </div>
                ))
            }
        </div>

    );
}

export default Experience_Rectangles;