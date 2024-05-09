import { useParams } from "react-router-dom";
import { Puppy } from "./Puppy";
import { NavBar } from "../navBar/NavBar";
import '../../styles/puppiesPage.css'

export function PuppiesPage(){

    const {breed} = useParams(); 

    const breedType = () => {
        let breedTitle = breed?.replace("-", " "); 
        return breedTitle?.toUpperCase();
    }

    return(
        <div className="PuppiesPage">
            <div className="PuppiesPageHeader">
                <div className="PuppyTitle"> 
                    <img className="PawPrint" src="/images/two-dog-pawprints-svgrepo-com (6).svg"/>
                    <h1 className="Breed sniglet-extrabold">{breedType()}</h1>
                    <img className="PawPrint" src="/images/two-dog-pawprints-svgrepo-com (7).svg"/>
                </div>
                <NavBar/>
            </div>
            <div>
                <Puppy/>
            </div>
        </div>
    )
}