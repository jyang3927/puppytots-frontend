import { Link } from "react-router-dom";
import "../../styles/navBar.css"
import { Button, FormControl, createTheme } from "@mui/material";
import { signOut } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

export function NavBar(){

    const {user} = useAuth(); 

    return(
        <div className="NavigationContainer">

            {/* <div className="Header"> */}
                {/* <img className="dogFace" src="/images/dogFaceBrown.svg"/> */}
                {/* <h1 className="WelcomeHeader nunito"> - Welcome to PuppyTots -</h1> */}
                {/* <img className="PawPrint" src="/images/dogFaceBrown.svg"/> */}
            {/* </div> */}
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
                {/* <Link to={`/adminPage`}>
                    <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>Admin Page</Button>
                </Link> */}
                
                {/* <form className="loginSection">
                <FormControl sx={{ width: '20ch' }}>
                    {user? <Button onClick={signOut} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem", margin:"0", padding:"0", display:"flex"}}>Sign Out</Button> : 
                       <Button onClick={signIn} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem"}}> Sign In</Button>}
                </FormControl>
                </form> */}
            </nav>
            <div className="AdminPageLink">
                <Link to={`/adminPage`}>
                        <Button color="secondary" sx={{fontSize:".8rem", margin:"0 10px", fontWeight:"bold", fontFamily: "Nunito, sans-serif", color: "#515151"}}>Admin Page</Button>
                </Link>
            </div>
           
        </div>
    )
}