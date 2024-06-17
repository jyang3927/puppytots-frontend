import { Link } from "react-router-dom";
import "../../styles/navBar.css"
import { Button, FormControl, createTheme } from "@mui/material";

export function NavBar(){

    return(
        <div className="NavigationContainer">
            <div className="LogoSection">
                <img className="dogFace" src="/images/dogFaceBrown.svg" alt="dogFace" />
                <span className="PuppytotsLogo">PUPPYTOTS</span>
            </div>
            <nav className="NavBar">
                <Link to={`/`}>
                    <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>- Home -</Button>
                </Link>
                <Link to={`/ourDogs/getDogs`}>
                    <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>- Our Parents -</Button>
                </Link>
                <Link to={`/puppies/maltipoo`}>
                    <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>- Maltipoo -</Button>
                </Link>
                <Link to={`/puppies/toy-poodle`}>
                    <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>- Toy Poodle -</Button>
                </Link>
                <Link to={`/puppies/shihpoo`}>
                    <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>- Shihpoo -</Button>
                </Link>
                <Link to={`/contactUs`}>
                    <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>- Contact Us -</Button>
                </Link>
            </nav>
            <div className="AdminPageLink">
                <Link to={`/adminPage`}>
                        <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>Admin Page</Button>
                </Link>
            </div>
           
        </div>
    )
}