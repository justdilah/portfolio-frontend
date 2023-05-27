import React  from 'react';
import {useParams} from "react-router-dom";
import rectImg from "../assets/Rectangle 3.png";
import Option from "../components/Option";
import {InfinitySpin} from "react-loader-spinner";
import {baseURL} from "../services/Constants";


function Project() {
    const {Name} = useParams();

    // Reference: https://www.youtube.com/watch?v=Vfdy4qAoPYs
    // There are 4 states when fetching data
    // State 1: Did not do anything yet
    // State 2: In the process of fetching data
    // State 3: Retrieved the data
    // State 4: Error occurred

    const [data, setData] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState();

    // React will not wait till the data has been loaded
    React.useEffect(() => {
        fetch(baseURL + "/project/" + Name)
            .then(res=> res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            }).catch(error => setError(error))

    }, []);

    if(loading || document.readyState === "loading")
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


    const myArray = data.Tags.split(";");
    const pdfName = data.Thumbnail.replaceAll(".png",'');

    return (

        <body className="Body-Class">
            <a href={"/projects"}><button className="viewmore">{"< Go Back"}</button></a>
            <div className="intro-block">
                <img className="div-rect" src={rectImg} alt="logo" />
                <div className="intro">
                    <img className="project-img" src={"/thumbnails/" + data.Thumbnail}/>
                    <div className="inner_div">
                        <h2><strong>{data.Name}</strong></h2>
                        <p className="descriptions">{data.Descriptions}</p>
                        <div className="tags-div">
                            {myArray.map((item) => (
                                <>
                                    <Option option={item}/>
                                </>
                            ))}
                        </div>
                        <div className="tags-div">
                            <a href={data.SourceCode}><button className="viewmore">View Source Code</button></a>

                            <a href={"/document/"+pdfName+".pdf"}><button className={data.HaveReport ? "viewmore" : "none"}>View Report</button></a>
                        </div>


                    </div>
                </div>
            </div>
        </body>
    );

}

export default Project;