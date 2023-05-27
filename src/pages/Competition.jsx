import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import rect from "../assets/Rectangle 3.png";
import {InfinitySpin} from "react-loader-spinner";
import {baseURL} from "../services/Constants";

function Competition(){
    const navigate = useNavigate();
    const {Name} = useParams();
    const [data, setData] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState();

    React.useEffect(() => {
        fetch(baseURL + "/competition/" + Name)
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
            <body className="Body-Class">
                Error
                <br/>
                <a href="/"><button className="viewmore">Return to Website</button></a>
            </body>
        );

    return (
        <body className="Body-Class">
        <button className="viewmore" onClick={() => {
            navigate("/aboutme");
        }}>{"< Go Back"}</button>
        <div className="project-div">
            <img className="div-rect" src={rect}/>
            <div className="inner">
                <p className="company"><strong>{data.Name}</strong></p>
                <p><strong>{data.Title}</strong></p>
                <p className="css-fix">{data.Description}</p>
                <div className="option-div">{data.Type}</div>

            </div>

        </div>
        </body>
    );
}

export default Competition;