import { Container } from "@mui/material";
import { NavBar } from "../navBar/NavBar";
import "../../styles/ourDogs.css"
import { useDog } from "../../hooks/useDog";
import { useEffect, useState } from "react";
import { Dog } from "../../models/Dog";
import { DogCard } from "./DogCard";
import { OurDogsForm } from "../forms/OurDogsForm";
import { useAuth } from "../../hooks/useAuth";

export function OurDogs(){

    const{createNewDog, ourDogsList} = useDog();
    // const{user} = useAuth(); 

    const [femaleDogs, setFemaleDogs] = useState<Dog[] | null>(null); 
    const [maleDogs, setMaleDogs] = useState<Dog[] | null>(null) ;
    
    useEffect(() => {
        getFemaleDogs(); 
        getMaleDogs(); 
    }, [createNewDog])

    const getFemaleDogs = () => {
        if (ourDogsList){
            let getAllFemales = ourDogsList.filter(dogs => dogs.sex.toLowerCase() === "female")
            setFemaleDogs(getAllFemales);  
        }
    }

    const getMaleDogs = () => {
        if(ourDogsList){
            let getAllMales = ourDogsList.filter(dog => dog.sex.toLowerCase() === "male"); 
            setMaleDogs(getAllMales);
        }
    }

    return(
        <div className="OurDogs">
            <div className="DogHeaderContainer">
                <div className="DogPageHeader">
                    <img className="PawPrint" src="/images/two-dog-pawprints-svgrepo-com (7).svg"/>
                    <h1 className="WelcomeHeader sniglet-extrabold ">Our Dogs</h1>
                    <img className="PawPrint" src="/images/two-dog-pawprints-svgrepo-com (6).svg"/>
                </div>
                <NavBar/>
            </div>
            <div className="OurDogsContent"> 
                <div className="FormButton">
                    <OurDogsForm/>
                    {/* {user?.email === 'yangjm1287@gmail.com' && <OurDogsForm/>} */}
                </div>
                <Container sx={{margin: 'auto'}}>
                    <h4 className="FemaleHeader sniglet-extrabold">FEMALES</h4>
                    <div className="FemaleDogDisplay">
                        {femaleDogs?.map(femaleDog => <DogCard dogInfo={femaleDog}/>)}
                    </div>
                </Container>
                <Container>
                    <h4 className="MaleHeader sniglet-extrabold">MALES</h4>
                    <div className="MaleDogDisplay">
                        {maleDogs?.map(maleDog => <DogCard dogInfo={maleDog}/>)}
                    </div>
                </Container>
            </div>
        </div>
    )
}