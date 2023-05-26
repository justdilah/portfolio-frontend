import React  from 'react';
import {Link,useLocation} from "react-router-dom";
function Navbar() {
    const location = useLocation();
    const [url, setUrl] = React.useState(null);
    React.useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
            <div className="container-navbar">
                <Link to="/" className={"portfolio" + (url === "/" ?" active" : "")}>Portfolio
                    <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143">
                        <path d="M546.214 89.072
                         c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5
                         273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
                </Link>
                <div className="navbar-base">
                    <ul className="navbar-main">
                        <li className="nav-item-create">
                            <Link to="/aboutme" className={"nav-link-item" + (url === "/aboutme" ?" active" : "")} >About Me
                                <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143"><path d="M546.214 89.072
                                c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5
                                273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
                            </Link>
                        </li>
                        <li className="nav-item-create">
                            <Link to="/projects" className={"nav-link-item" + (url === "/projects" ?" active" : "")} >My Projects
                                <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143"><path d="M546.214 89.072
                                c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5
                                273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
                            </Link>
                        </li>
                        <li className="nav-item-create">
                            <Link to="/skills" className={"nav-link-item" + (url === "/skills" ?" active" : "")}>My Skills
                                <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143"><path d="M546.214 89.072
                                c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5
                                273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Navbar;