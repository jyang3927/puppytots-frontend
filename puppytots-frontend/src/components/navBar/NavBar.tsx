import { Link } from "react-router-dom";
import "../../styles/navBar.css"
import { Button, FormControl, createTheme } from "@mui/material";
import { themeOptions } from "../../styles/materialUi/themeColors";
import { signOut } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

export function NavBar(){

    const {signOut, signIn, user} = useAuth(); 

    return(
        <div className="NavBar">
            <nav className="navigation">
                <Link to={`/`}>
                    <Button color="secondary" sx={{fontSize:"10px", margin:"0 10px", fontWeight:"bold"}}>Home</Button>
                </Link>
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
                
                {/* <form className="loginSection">
                <FormControl sx={{ width: '20ch' }}>
                    {user? <Button onClick={signOut} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem", margin:"0", padding:"0", display:"flex"}}>Sign Out</Button> : 
                       <Button onClick={signIn} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem"}}> Sign In</Button>}
                </FormControl>
                </form> */}
            </nav>
            <form className="loginSection">
                <FormControl>
                    {user? <Button onClick={signOut} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem", margin:"0", padding:"0", display:"flex"}}>Sign Out</Button> : 
                       <Button onClick={signIn} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem"}}> Sign In</Button>}
                </FormControl>
            </form>
        </div>
    )
}