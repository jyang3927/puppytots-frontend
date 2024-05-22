import { Link } from "react-router-dom";
import "../../styles/navBar.css"
import { Button, createTheme } from "@mui/material";
import { themeOptions } from "../../styles/materialUi/themeColors";
import { signOut } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

export function NavBar(){

    const {signOut, signIn} = useAuth(); 

    return(
        <div className="NavBar">
            <nav className="navigation">
                <Link to={`/ourDogs/getDogs`}>
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
                <Link to={`/`}>
                    <Button color="secondary" sx={{fontSize:"10px", margin:"0 10px", fontWeight:"bold"}}>Home</Button>
                </Link>
            </nav>
        </div>
    )
}