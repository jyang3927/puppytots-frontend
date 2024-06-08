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
import { Puppy } from "../../models/Puppy";

export function PuppiesPage(){

    const {breed} = useParams(); 
    const {user, isBreeder} = useAuth(); 

    const {setBreedName, puppies, breedName, puppyUpdated, setPuppyByBreed} = usePuppy(); 
    
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
        if(puppies){
            return puppies.map((puppy) => <AdminPuppyCard puppy={puppy}/>)
        }
        
    }

    const breedType = () => {
        let breedTitle = breed?.replace("-", " "); 
        let breedName = breedTitle?.toUpperCase(); 
        return breedName;
    }

    // const getCurrentPuppies = async() => {
    //     let response = await setPuppyByBreed(breedName!); 

    //     response.map((puppy) => <PuppyCard puppy={puppy}/>) 
    // }

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

                {puppies !== null && isBreeder === true && showPuppiesDisplayed(puppies)}; 
                {/* {(puppies !== null && isBreeder === true) && puppies.map((puppy) => <AdminPuppyCard puppy={puppy}/>)}
                {(puppies !== null && isBreeder === false) && puppies.map((puppy) => <PuppyCard puppy={puppy}/>)} */}
            </div>
        </div>
    )
}
