import { Puppy } from "../../models/Puppy"
import "../../styles/puppyCard.css"

interface PuppyProps{
    puppy: Puppy; 
}

export function PuppyCard({puppy}: PuppyProps){
    
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
                <h5></h5>
                <div className="PuppyDetailsContainer sniglet-regular">
                    <img src={puppy.imageName} className="PuppyImageProfile"/>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Sex: </span>{puppy.sex}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Mother: </span>{puppy.motherName}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Father: </span>{puppy.fatherName}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Price: </span>${puppy.price}</div>
                    <span className="PuppyDetailsLabel">{availablePuppy()}</span>
                </div>
            </div>
        </div>
    )
}