import { useParams } from "react-router-dom";
import { PuppyCard } from "./PuppyCard";
import { NavBar } from "../navBar/NavBar";
import '../../styles/puppiesPage.css'
import { usePuppy } from "../../hooks/usePuppy";
import { useEffect } from "react";
import { NewPuppyForm } from "../forms/NewPuppyForm";
import { useAuth } from "../../hooks/useAuth";

export function PuppiesPage(){

    const {breed} = useParams(); 
    const {user} = useAuth(); 

    const {setBreedName, puppies, breedName} = usePuppy(); 
    
    useEffect(() => {
        if(breed !== undefined){
            setBreedName(breed); 
            console.log("breedName: " + breedName); 
            console.log("puppieslist: " + puppies)
        }
    }, [breed])

    const breedType = () => {
        let breedTitle = breed?.replace("-", " "); 
        let breedName = breedTitle?.toUpperCase(); 
        return breedName;
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
            <div className="AddPuppyButton">
                {user?.email === 'yangjm1287@gmail.com' && <NewPuppyForm/>}
            </div>
            <div className="PuppyList">
                {puppies !== null && puppies.map((puppy) => <PuppyCard puppy={puppy}/>)}
            </div>
        </div>
    )
}