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
            <form className="AdminLoginSection">
                <h1>Administrator Log In</h1>
                <img className="AdminIcon" src="/images/user-svgrepo-com (1).svg"/>
                <FormControl>
                    {user? <Button onClick={signOut} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem", margin:"0", padding:"0", display:"flex"}}>Sign Out</Button> : 
                       <Button onClick={signIn} variant="contained" color="secondary" size="small" sx={{width:"10px", height:"20px", fontSize:".5rem"}}> Sign In</Button>}
                </FormControl>
            </form>
            <div className="AdminFormOptions"> 
                <div className="AddPuppyFormOption">
                    
                    <NewPuppyForm/>
                </div>
                <div className="AddDogFormOption">
                    <OurDogsForm/>
                </div>
            </div>
        </div>
    )
}