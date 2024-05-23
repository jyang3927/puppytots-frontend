import { Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useDog } from "../../hooks/useDog";
import { Dog } from "../../models/Dog"
import "../../styles/dogCard.css"
interface DogCardProps{
    dogInfo:Dog; 
}

export function DogCard({dogInfo}:DogCardProps){

    let{deleteOurDog} = useDog(); 
    let{user} = useAuth(); 
    
    return(
        <div className="DogCard sniglet-regular">
            <h3 className="DogInfoName">{dogInfo.name}</h3>
            <img src={dogInfo.imageUrl} className="DogImageProfile"/>
            <div className="DogCardContainer">
                {/* <img src={dogInfo.imageUrl} className="DogImageProfile"/> */}
                <p className="DogCardDetails">Breed: {dogInfo.breed}</p>
                <p className="DogCardDetails">Weight: {dogInfo.weight}lbs</p>
                <p className="DogCardDetails">Details: {dogInfo.details}</p>
            </div>
            {user?.email === 'yangjm1287@gmail.com' && <Button variant="contained" size="small" color="secondary" style={{marginBottom:'10px'}} className="DogProfileDelete" onClick={() => deleteOurDog(dogInfo._id!)}>Delete Dog</Button>}

        </div>
    )
}