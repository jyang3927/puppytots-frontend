import { Link } from "react-router-dom";
import '../../styles/homepage.css'
import { NavBar } from "../navBar/NavBar";
export function HomePage(){
    return(
        <div className="HomePage">
            <div className="Header">
                <img className="PawPrint" src="images/two-dog-pawprints-svgrepo-com (7).svg"/>
                <h1 className="WelcomeHeader sniglet-extrabold ">Welcome to PuppyTots</h1>
                <img className="PawPrint" src="images/two-dog-pawprints-svgrepo-com (6).svg"/>
            </div>
            <NavBar/>
        </div>
    )
}