import {ReactNode, createContext, useState, useEffect} from "react"; 
import { Puppy } from "../models/Puppy";
import { createPuppy, deletePuppy, getAllPuppiesByBreed, updatePuppy } from "../services/database/dbPuppies";

interface PuppyContextType{
    setPuppyByBreed:(breed:string) => Promise<Puppy[]>; 
    setBreedName:(breed:string) => void; 
    createNewPuppy:(puppyInfo:Puppy) => Promise<Puppy>;
    deletePuppyProfile:(puppyId:string) => Promise<void>; 
    editPuppyInfo:(puppy:Puppy, puppyId:string) => Promise<Puppy>;
    puppies:Puppy[] | null; 
    setNewPuppy: (newPup:Puppy) => void; 
    puppyUpdated:Puppy | null; 
    breedName: string | null;
}

export const PuppyContext = createContext<PuppyContextType | undefined>(undefined); 

interface PuppyContextProviderProps{
    children: ReactNode; 
}; 

export const PuppyProvider = ({children}: PuppyContextProviderProps) => {
    const [puppies, setPuppies] = useState<Puppy[] | null>(null); 
    const [breedName, setBreedName] = useState<string | null>(null); 
    const [newPuppy, setNewPuppy] = useState<Puppy | null>(null); 
    const [puppyUpdated, setPuppyUpdated] = useState<Puppy | null>(null); 


    useEffect(() => {
        if(breedName !== null){
            console.log("CONTEXT BREEDNAME CHANGED? " + breedName)
            setPuppyByBreed(breedName).then(response => setPuppies(response));   
            console.log("RESPONSE AFTER SETTING PUPPY", puppies)
   
        }
    }, [breedName]); 

    const setPuppyByBreed = async(breed:string): Promise<Puppy[]> => {
        try{
            let response = await getAllPuppiesByBreed(breed); 
            console.log("RESPONSE OF PUPPIES from DB: " + response.map((puppy) => console.log(puppy)))
            setPuppies(response); 
            console.log("SET PUPPIES: " + puppies?.map((puppy) => console.log(puppy)))
            return response; 
        } catch(error:any){
            console.log("error in context Puppy"); 
            return error; 
        }
    }; 

    // CREATE NEW PUPPY

    useEffect(() => {
        if(breedName !== null){
            setPuppyByBreed(breedName); 
            console.log("PUPPIES UPDATE AFTER NEW PUPPY", puppies); 
        }
    }, [newPuppy])

    const createNewPuppy = async(puppyInfo:Puppy): Promise<Puppy> => {
        try{
            let response = await createPuppy(puppyInfo);  
            setNewPuppy(response); 
            return response; 
        } catch(error:any){
            console.log("error in context Puppy"); 
            return error; 
        }
    };

    // EDIT PUPPY

    useEffect(() => {
        if(breedName !== null){
            setPuppyByBreed(breedName).then((response) => setPuppies(response)); 
        }
    }, [puppyUpdated])

    const editPuppyInfo = async(puppy:Puppy, puppyId:string): Promise<Puppy> => {
        try{
            let response = await updatePuppy(puppy, puppyId); 
            setPuppyUpdated(response); 
            console.log("RESPONSE AFTER EDIT PUPPY INFO", response)
            console.log("SETPUPPY UPDATE CHECK", puppyUpdated)
            console.log("SET PUPPY EDIT PUPPY PUPPY STATE", puppies)
            return response; 
        }catch(error:any){
            console.log("error in Puppy Context Patch"); 
            return error; 
        }
    }

    // DELETE PUPPY

    const deletePuppyProfile = async(puppyId:string) => {
        try{
            console.log(puppyId); 
            let response = await deletePuppy(puppyId); 
            setPuppyByBreed(breedName!); 
            console.log("PUPPIES AFTER DELETE", puppies)
            return response; 
        }catch(error:any){
            console.log("error in Puppy Context Delete"); 
            return error; 
        }
    }

    return(
        <PuppyContext.Provider value={{setPuppyByBreed, createNewPuppy, setBreedName, deletePuppyProfile, editPuppyInfo, puppies, setNewPuppy, breedName, puppyUpdated}}> 
            {children}
        </PuppyContext.Provider>
    )
}

