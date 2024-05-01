import { Link } from "react-router-dom";
import "../../styles/navBar.css"
import { Button, createTheme } from "@mui/material";
import { themeOptions } from "../../styles/materialUi/themeColors";


export function NavBar(){
    return(
        <div className="NavBar">
            <nav className="navigation">
                <Link to={`/ourDogs`}>
                    <Button color="secondary" sx={{fontSize:"15px", margin:"0 10px", fontWeight:"bold"}}>Our Dogs</Button>
                </Link>
                <Link to={`/puppies/Maltipoos`}>
                    <Button color="secondary" sx={{fontSize:"15px", margin:"0 10px", fontWeight:"bold"}}>Maltipoos</Button>
                </Link>
                <Link to={`/puppies/Toy-Poodle`}>
                    <Button color="secondary" sx={{fontSize:"15px", margin:"0 10px", fontWeight:"bold"}}>Toy Poodles</Button>
                </Link>
                <Link to={`/puppies/Shihpoos`}>
                    <Button color="secondary" sx={{fontSize:"15px", margin:"0 10px", fontWeight:"bold"}}>Shihpoos</Button>
                </Link>
                <Link to={`/contactUs`}>
                    <Button color="secondary" sx={{fontSize:"15px", margin:"0 10px", fontWeight:"bold"}}>Contact Us</Button>
                </Link>
            </nav>
        </div>
    )
}