import { Container } from "@mui/material";
import { NavBar } from "../navBar/NavBar";
import "../../styles/ourDogs.css"
import { useDog } from "../../hooks/useDog";
import { useEffect, useState } from "react";
import { Dog } from "../../models/Dog";
import { DogCard } from "./DogCard";
import { OurDogsForm } from "../forms/OurDogsForm";
import { useAuth } from "../../hooks/useAuth";
import { AdminDogCard } from "../admin-page/AdminDogCard";

export function OurDogs(){

    const{createNewDog, ourDogsList} = useDog();

    const {isBreeder} = useAuth(); 
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
                <NavBar/>
            </div>
            <div className="OurDogsContent"> 
                {/* <div className="FormButton">
                    <OurDogsForm/>
                    {/* {user?.email === 'yangjm1287@gmail.com' && <OurDogsForm/>} */}
                {/* </div> */}
                <Container sx={{margin: 'auto'}}>
                    <h4 className="FemaleHeader nunito">Our Females</h4>
                    <div className="FemaleDogDisplay">
                        { isBreeder === true ? femaleDogs?.map(femaleDog => <AdminDogCard dog={femaleDog}/>)
                        : femaleDogs?.map(femaleDog => <DogCard dogInfo={femaleDog}/>)
                        }
                    </div>
                </Container>
                <Container>
                    <h4 className="MaleHeader nunito">Our Males</h4>
                    <div className="MaleDogDisplay">
                        { isBreeder === true ? maleDogs?.map(maleDog => <AdminDogCard dog={maleDog}/>)
                        : maleDogs?.map(maleDog => <DogCard dogInfo={maleDog}/>)
                        }
                        {maleDogs?.map(maleDog => <DogCard dogInfo={maleDog}/>)}
                    </div>
                </Container>
            </div>
        </div>
    )
}