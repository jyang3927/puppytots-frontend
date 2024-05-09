import { Container } from "@mui/material";
import { NavBar } from "../navBar/NavBar";
import "../../styles/ourDogs.css"

export function OurDogs(){

    return(
        <div className="OurDogs">
            <div>
                <div className="Header">
                    <img className="PawPrint" src="images/two-dog-pawprints-svgrepo-com (7).svg"/>
                    <h1 className="WelcomeHeader sniglet-extrabold ">Our Dogs</h1>
                    <img className="PawPrint" src="images/two-dog-pawprints-svgrepo-com (6).svg"/>
                </div>
                <NavBar/>
            </div>
            <div className="OurDogsContent"> 
                <Container sx={{border: '1px solid #9c27b0', margin: 'auto', borderRadius: '7px'}}>
                    <h4 className="FemaleHeader sniglet-extrabold">Females</h4>
                </Container>
                <Container>
                    <h4 className="MaleHeader sniglet-extrabold">Males</h4>
                </Container>
            </div>
        </div>
    )
}