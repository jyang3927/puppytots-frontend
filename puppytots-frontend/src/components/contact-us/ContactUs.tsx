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
        </div>
    )
}