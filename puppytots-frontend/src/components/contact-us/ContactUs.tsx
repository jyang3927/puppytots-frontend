import { Box, Icon, TextField } from "@mui/material";
import "../../styles/contactUs.css"
import { NavBar } from "../navBar/NavBar";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export function ContactUs(){
    return(
        <div className="ContactUs">
            <div>
                <NavBar/>
            </div>
            <div className="ContactUsMain nunito">
                <div className="ContactUsLeft">
                    <h4 className="ContactUsSubHeading">Ready to bring your new family member home?</h4>
                    <h1 className="ContactUsHeading">Contact us</h1>
                    <p className="ContactUsSpan">You can reach out through call, email, or text message. We are also active on Facebook, so please feel free to say hello!</p>
                    <div className="ContactUsInfo">
                        <p ><LocationOnIcon className="ContactUsIcons brownColor"/>Ravenna, Michigan USA</p>
                        <p><LocalPhoneIcon className="ContactUsIcons brownColor"/>231-329-0881</p>
                        <p><EmailIcon className="ContactUsIcons brownColor"/>bjeaajbundy@gmail.com</p>
                    </div>
                    <p className="brownColor">Find us in Facebook and Instagram!</p>
                    <div className="SocialMediaIcons brownColor">
                        <a className="brownColor" href=""> <FacebookIcon/></a>
                        <a className="brownColor" href=""><InstagramIcon/></a>
                    </div>
                </div>
                <div className="ContactUsRight">
                    <img className="ContactUsImage" src="images/girlDog2.jpeg"/> 
                </div>
            </div>
            {/* <div>
                <h2 style={{textAlign: 'center', margin:"0", fontSize: '1.5rem'}} className="ContactUsTitleForm nunito">Please reach out to inquire about any of our pups!</h2>
            </div>
            <Box sx={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', marginTop: "0", flexWrap:"wrap"}}>
                <Box className="ContactUsInfo" sx={{m:2, width: '30vw', display:'flex', justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
                    <div className="ContactUsInfoAlign">
                        <h3 style={{textAlign: 'center',display:"flex", flexDirection:"column"}} className="ContactUsTitle nunito">Contact Info</h3> 
                    </div>
                    <div className="ContactUsInfoAlign nunito">
                        <p className="ContactDetails nunito"><span className="ContactDetailsHead nunito">Location: </span>Ravenna, Michigan USA</p>
                        <p className="ContactDetails nunito"><span className="ContactDetailsHead nunito">Phone Number: </span>231-329-0881  </p>
                        <p className="ContactDetails nunito"><span className="ContactDetailsHead nunito">Email: </span> bjeaajbundy@gmail.com</p>
                    </div>
                </Box>
                <img className="ContactUsPhoto" src="images/girlDog2.jpeg"/> */}
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
            {/* </Box> */}
        </div>
    )
}