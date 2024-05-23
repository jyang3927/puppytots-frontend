import { Button } from "@mui/material";
import { Puppy } from "../../models/Puppy"
import "../../styles/puppyCard.css"
import { usePuppy } from "../../hooks/usePuppy";
import { useAuth } from "../../hooks/useAuth";

interface PuppyProps{
    puppy: Puppy; 
}

export function PuppyCard({puppy}: PuppyProps){

    let {deletePuppyProfile} = usePuppy(); 
    let {user} = useAuth(); 

    
    let availablePuppy = () => {
        let setAvailable = "AVAILABLE";
        if(puppy.available === false){
            setAvailable = "I have found my family!"; 
            return setAvailable;
        }
        return setAvailable;
    }

    return(
        <div className="PuppyCard">
            <div className="PuppyProfile">
                <img src={puppy.imageName} className="PuppyImageProfile"/>
                <div className="PuppyDetailsContainer sniglet-regular">
                    {/* <img src={puppy.imageName} className="PuppyImageProfile"/> */}
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Sex: </span>{puppy.sex}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Mother: </span>{puppy.motherName}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Father: </span>{puppy.fatherName}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Price: </span>${puppy.price}</div>
                    <span className="PuppyDetailsLabel">{availablePuppy()}</span>
                </div>
                {user?.email === 'yangjm1287@gmail.com' && <Button variant="contained" size="small" color="secondary" style={{marginBottom:'10px'}} className="PuppyProfileDelete" onClick={() => deletePuppyProfile(puppy._id!)}>Delete Puppy</Button>}
            </div>
        </div>
    )
}