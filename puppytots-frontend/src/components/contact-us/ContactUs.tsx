import { Box, TextField } from "@mui/material";
import "../../styles/contactUs.css"
import { NavBar } from "../navBar/NavBar";

export function ContactUs(){
    return(
        <div className="ContactUs">
            <div>
                <div className="Header">
                <img className="PawPrint" src="images/two-dog-pawprints-svgrepo-com (7).svg"/>
                <h1 className="WelcomeHeader sniglet-extrabold ">Welcome to PuppyTots</h1>
                <img className="PawPrint" src="images/two-dog-pawprints-svgrepo-com (6).svg"/>
            </div>
                <NavBar/>
            </div>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "20px"}}>
                <img className="ContactUsPhoto" src="images/Screenshot 2024-05-07 at 2.13.31 PM.png"/>
                <Box component="form" 
                    sx={{'& > :not(style)': { m: 2, width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'white'}, backgroundColor:"white", borderRadius:"10px", width:"auto", height:"auto", padding:"10px 20px"}}
                    noValidate
                    autoComplete="off"> 
                    <h3 style={{textAlign: 'center', marginBottom: "15px", fontSize: '25px'}} className="ContactUsTitle sniglet-extrabold">Contact Us</h3>
                    <TextField label="Name" variant="outlined" margin="normal" color="secondary" size="small" focused/>
                    <TextField label="Phone Number" variant="outlined" margin="normal" color="secondary" size="small" focused/>
                    <TextField label="Email" variant="outlined" margin="normal" color="secondary" size="small" focused />
                    <TextField label="Message" type="text" variant="outlined" margin="normal" color="secondary" size="small" multiline focused />
                </Box>
            </Box>
        </div>
    )
}