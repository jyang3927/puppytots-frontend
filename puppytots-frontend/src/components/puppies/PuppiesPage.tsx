import { useParams } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import '../../styles/puppiesPage.css'
import { usePuppy } from "../../hooks/usePuppy";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AdminPuppyCard } from "../admin-page/AdminPuppyCard";
import { Puppy } from "../../models/Puppy";
import { PuppyCard } from "./PuppyCard";

export function PuppiesPage(){

    const {breed} = useParams(); 
    const {isBreeder} = useAuth(); 

    const {setBreedName, puppies, breedName} = usePuppy(); 
    
    useEffect(() => {
        if(breed !== undefined){
            setBreedName(breed); 
            console.log("breedName: " + breedName); 
            console.log("puppieslist: " + puppies)
        }
    }, [breed])

    useEffect(() => {
        if(puppies){
            showPuppiesDisplayed(puppies); 
            console.log("SET PUPPIES IN PUPPIES PAGE: " + puppies?.map((puppy) => console.log(puppy)))
        }

    }, [puppies])

    const showPuppiesDisplayed = (puppies:Puppy[]) => {
        console.log("PUPPIES BEING DISPLAYED", puppies)
        if(puppies && isBreeder === true){
            return puppies.map((puppy) => <AdminPuppyCard puppy={puppy}/>)
        }
        else if (puppies){
            return puppies.map((puppy) => <PuppyCard puppy={puppy}/>)
        }
    }

    const breedType = () => {
        let breedTitle = breed?.replace("-", " "); 
        let breedName = breedTitle?.toUpperCase(); 
        return breedName;
    }

    return(
        <div className="PuppiesPage">
            <div className="PuppiesPageHeader">
                <NavBar/>
            </div>
            <div className="breedHeader">
                <h1 className="nunito breedHeader">- {breedType()}S -</h1>
            </div>
            <div className="PuppyList">
                {puppies !== null && showPuppiesDisplayed(puppies)}; 
            </div>
        </div>
    )
}
