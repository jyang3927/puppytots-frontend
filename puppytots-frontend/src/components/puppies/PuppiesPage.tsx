import { useParams } from "react-router-dom";
import { PuppyCard } from "./PuppyCard";
import { NavBar } from "../navBar/NavBar";
import '../../styles/puppiesPage.css'
import { usePuppy } from "../../hooks/usePuppy";
import { useEffect } from "react";
import { NewPuppyForm } from "../forms/NewPuppyForm";
import { useAuth } from "../../hooks/useAuth";
import { PuppyAuthCheck } from "./PuppyAuthCheck";
import { AdminPuppyCard } from "../admin-page/AdminPuppyCard";

export function PuppiesPage(){

    const {breed} = useParams(); 
    const {user, isBreeder} = useAuth(); 

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
                <NavBar/>
            </div>
            {/* <div className="AddPuppyButton">
                {user?.email === 'yangjm1287@gmail.com' && <NewPuppyForm/>}
            </div> */}
            <div className="breedHeader">
                <h1 className="nunito breedHeader">- {breedType()}S -</h1>
            </div>
            <div className="PuppyList">
                {(puppies !== null && isBreeder === true) && puppies.map((puppy) => <AdminPuppyCard puppy={puppy}/>)}
                {(puppies !== null && isBreeder === false) && puppies.map((puppy) => <PuppyCard puppy={puppy}/>)}
            </div>
        </div>
    )
}