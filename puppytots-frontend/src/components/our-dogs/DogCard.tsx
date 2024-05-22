import { Dog } from "../../models/Dog"
import "../../styles/dogCard.css"
interface DogCardProps{
    dogInfo:Dog; 
}

export function DogCard({dogInfo}:DogCardProps){
    return(
        <div className="DogCard sniglet-regular">
            <h3>{dogInfo.name}</h3>
            <div className="DogCardContainer">
                <img src={dogInfo.imageUrl} className="DogImageProfile"/>
                <p className="DogCardDetails">Breed: {dogInfo.breed}</p>
                <p className="DogCardDetails">Weight: {dogInfo.weight}lbs</p>
                <p className="DogCardDetails">Details: {dogInfo.details}</p>
            </div>
        </div>
    )
}