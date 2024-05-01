import { useParams } from "react-router-dom";
import { Puppy } from "./Puppy";
import { NavBar } from "../navBar/NavBar";

export function PuppiesPage(){

    const {breed} = useParams(); 

    const breedType = () => {
        let breedTitle = breed?.replace("-", " "); 
        return breedTitle;
    }

    return(
        <div className="PuppiesPage">
            <div className="PuppiesPageHeader">
                <h1 className="Breed">{breedType()}</h1>
                <NavBar/>
            </div>
        </div>
    )
}