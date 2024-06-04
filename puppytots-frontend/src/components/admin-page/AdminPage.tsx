import { Button, FormControl } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { NavBar } from "../navBar/NavBar";
import { NewPuppyForm } from "../forms/NewPuppyForm";
import { OurDogsForm } from "../forms/OurDogsForm";

import '../../styles/adminPage.css'

export function AdminPage(){

    const {signIn, signOut, user} = useAuth(); 

    return(
        <div className="AdminPage"> 
            <NavBar/>
            <form className="AdminLoginSection nunito">
                <h1 className="AdminLoginHeader">ADMINISTRATOR LOG-IN</h1>
                <img className="AdminIcon" src="/images/id-card-svgrepo-com.svg"/>
                <FormControl>
                    {user? <Button onClick={signOut} variant="contained"sx={{':hover': {backgroundColor:'white', color:"#ae8f57"},width:"7rem", height:"2.3rem", fontSize:"1rem", margin:"0", padding:"0", display:"flex", backgroundColor:'#ae8f57', fontFamily:"nunito, sans-serif", fontWeight:"800"}}>Sign Out</Button> : 
                       <Button onClick={signIn} variant="contained" sx={{':hover': {backgroundColor:'white', color:"#ae8f57"},width:"7rem", height:"2.3rem", fontSize:"1rem", margin:"0", padding:"0", display:"flex", backgroundColor:'#ae8f57', fontFamily:"nunito, sans-serif", fontWeight:"800"}}> Sign In</Button>}
                </FormControl>
            </form>
            <div className="AdminFormOptions"> 
                <div className="AddFormOption">
                    {user?.email === 'yangjm1287@gmail.com' && <NewPuppyForm/>}
                </div>
                <div className="AddFormOption">
                {user?.email === 'yangjm1287@gmail.com' && <OurDogsForm/>}
                </div>
            </div>
        </div>
    )
}