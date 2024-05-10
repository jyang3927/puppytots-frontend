import { Link } from "react-router-dom";
import "../../styles/navBar.css"
import { Button, createTheme } from "@mui/material";
import { themeOptions } from "../../styles/materialUi/themeColors";


export function NavBar(){
    return(
        <div className="NavBar">
            <nav className="navigation">
                <Link to={`/ourDogs`}>
                    <Button color="secondary" sx={{fontSize:"10px", margin:"0 10px", fontWeight:"bold"}}>Our Dogs</Button>
                </Link>
                <Link to={`/puppies/maltipoo`}>
                    <Button color="secondary" sx={{fontSize:"10px", margin:"0 10px", fontWeight:"bold"}}>Maltipoo</Button>
                </Link>
                <Link to={`/puppies/toy-poodle`}>
                    <Button color="secondary" sx={{fontSize:"10px", margin:"0 10px", fontWeight:"bold"}}>Toy Poodle</Button>
                </Link>
                <Link to={`/puppies/shihpoo`}>
                    <Button color="secondary" sx={{fontSize:"10px", margin:"0 10px", fontWeight:"bold"}}>Shihpoo</Button>
                </Link>
                <Link to={`/contactUs`}>
                    <Button color="secondary" sx={{fontSize:"10px", margin:"0 10px", fontWeight:"bold"}}>Contact Us</Button>
                </Link>
            </nav>
        </div>
    )
}