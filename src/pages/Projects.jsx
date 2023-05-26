import React  from 'react';
import Project_Rectangles from "../components/Project_Rectangles"
import {getAllProjects} from "../services/UserService";
import { InfinitySpin } from  'react-loader-spinner'
function Projects() {

    //track state in a function component
    //state -> data in the app
    const [data, setData] = React.useState([]);
    const [active,setActive] = React.useState("");
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState();

   // request is made only once
    React.useEffect(() => {
        getAllProjects().then(projects => {
            setData(projects);
            setActive("All");
            setLoading(false);
        }).catch(error => setError(error));
    }, []);

    if(loading || document.readyState === "loading")
        return (
            <div style={{"paddingLeft":"150px"}}><InfinitySpin width='400' color="#527087"/></div>
        );

    if(error)
        return (
            <body className="Body-Class">
                Error
                <br/>
                <a href="/"><button className="viewmore">Return to Website</button></a>
            </body>
        );

    function handleProjects(e) {
        let option = e.target.value;
        option !== "All" ? getAllProjects().then(projects => {
            setData(projects.filter(project => project.Tags.includes(option)));
            setActive(option);
        }) : getAllProjects().then(projects => {
            setData(projects);
            setActive("All");
        });;
    }


    return (
        <>
        <div className="optionbar-base">
            <div className="optionbar-main">
                <button className={(active === "All" ? "optionbar-item-active" : "optionbar-item")} value="All" onClick={handleProjects}>All</button>
                <button className={(active === "Python" ? "optionbar-item-active" : "optionbar-item")} value="Python" onClick={handleProjects}>Python</button>
                <button className={(active === "Java" ? "optionbar-item-active" : "optionbar-item")} value="Java" onClick={handleProjects}>Java</button>
            </div>
        </div>
        <body className="Body-Class">
            <div className="all-project-div">
                {data.map((item, index) => (
                    <>
                      <Project_Rectangles key={item.Name} name={item.Name} tagString={item.Tags} image={item.Thumbnail} sourcecode={item.SourceCode}/>
                    </>

                ))}
            </div>
        </body>
        </>
    );

}

export default Projects;