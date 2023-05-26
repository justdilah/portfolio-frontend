import React from "react";
import Option from "../components/Option";
import {useParams} from "react-router-dom";
import rect from "../assets/Rectangle 3.png";
import {InfinitySpin} from "react-loader-spinner";

function Experience(){
    const {Name} = useParams();
    const [data, setData] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState();

    // React will not wait till the data has been loaded
    React.useEffect(() => {
        fetch("/experience/" + Name)
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
            <a href={"/aboutme"}><button className="viewmore">{"< Go Back"}</button></a>
            <div className="project-div">
                <img className="div-rect" src={rect}/>
                <div className="inner">
                    <p className="company"><strong>{data.CompanyName}</strong></p>
                    <p><strong>{data.JobPosition}</strong></p>
                    <p><strong>{data.Period}</strong></p>
                    <p className="css-fix descriptions">{data.Description}</p>
                    <div className="tags-div">
                        {data.Skills.map((item) => (
                            <>
                                <Option option={item}/>
                            </>
                        ))}
                    </div>

                </div>
            </div>
        </body>
    );
}


export default Experience;