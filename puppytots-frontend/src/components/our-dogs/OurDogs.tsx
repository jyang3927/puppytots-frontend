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

    const{getAllOurDogs, ourDogsList, updateDogInfo} = useDog();

    const {isBreeder} = useAuth(); 
    // const{user} = useAuth(); 

    const [femaleDogs, setFemaleDogs] = useState<Dog[] | null>(null); 
    const [maleDogs, setMaleDogs] = useState<Dog[] | null>(null) ;
    
    useEffect(() => {
       getFemaleDogs().then(getfemales => setFemaleDogs(getfemales)); 
        // setFemaleDogs(response);
        getMaleDogs(); 
    }, [updateDogInfo])

    const getFemaleDogs = async() => {
        let response = await getAllOurDogs(); 
        console.log("RESPONSE OF GET ALL DOGS", response)
        let getAllFemales = response.filter(dogs => dogs.sex.toLowerCase() === "female")
            console.log("ALL FEMALE DOGS", getAllFemales)
            return getAllFemales;
    }
    
    
    const getMaleDogs = async () => {
        let response = await getAllOurDogs(); 

        let getAllMales = response.filter(dogs => dogs.sex.toLowerCase() === "male")
            setMaleDogs(getAllMales);
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
                    </div>
                </Container>
            </div>
        </div>
    )
}