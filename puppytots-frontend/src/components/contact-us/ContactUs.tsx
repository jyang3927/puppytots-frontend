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
            <div>
                <h2 style={{textAlign: 'center', margin:"0", fontSize: '1.5rem'}} className="ContactUsTitleForm sniglet-extrabold">Please reach out to inquire about any of our pups!</h2>
            </div>
            <Box sx={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', marginTop: "0", flexWrap:"wrap"}}>
                <Box className="ContactUsInfo" sx={{m:2, width: '30vw', display:'flex', justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
                    <div className="ContactUsInfoAlign">
                        <h3 style={{textAlign: 'center',display:"flex", flexDirection:"column"}} className="ContactUsTitle sniglet-extrabold">Contact Info</h3> 
                    </div>
                    <div className="ContactUsInfoAlign">
                        <p className="ContactDetails sniglet-regular"><span className="ContactDetailsHead">Location: </span>Ravenna, Michigan USA</p>
                        <p className="ContactDetails sniglet-regular"><span className="ContactDetailsHead">Phone Number: </span>231-329-0881  </p>
                        <p className="ContactDetails sniglet-regular"><span className="ContactDetailsHead">Email: </span> bjeaajbundy@gmail.com</p>
                    </div>
                </Box>
                <img className="ContactUsPhoto" src="images/Screenshot 2024-05-07 at 2.13.31 PM.png"/>
                {/* <Box component="form" 
                    sx={{ m: 2, width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flex:'1', height:"45vh", padding:"10px 20px"}}
                    noValidate
                    autoComplete="off"> 
                    <h2 style={{textAlign: 'center', marginBottom: "15px", fontSize: '2rem'}} className="ContactUsTitleForm sniglet-extrabold">Please reach out to inquire about any of our pups!</h2> */}
                    {/* <TextField label="Name" variant="outlined" margin="normal" color="secondary" size="small" focused/>
                    <TextField label="Phone Number" variant="outlined" margin="normal" color="secondary" size="small" focused/>
                    <TextField label="Email" variant="outlined" margin="normal" color="secondary" size="small" focused />
                    <TextField label="Message" type="text" variant="outlined" margin="normal" color="secondary" size="small" multiline focused /> */}
                {/* </Box> */}
            </Box>
        </div>
    )
}