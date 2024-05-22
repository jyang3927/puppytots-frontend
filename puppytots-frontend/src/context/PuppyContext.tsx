import {ReactNode, createContext, useState, useEffect} from "react"; 
import { Puppy } from "../models/Puppy";
import { createPuppy, deletePuppy, getAllPuppiesByBreed } from "../services/database/dbPuppies";

interface PuppyContextType{
    setPuppyByBreed:(breed:string) => Promise<Puppy[]>; 
    setBreedName:(breed:string) => void; 
    createNewPuppy:(puppyInfo:Puppy) => Promise<Puppy>;
    deletePuppyProfile:(puppyId:string) => Promise<void>; 
    puppies:Puppy[] | null; 
    setNewPuppy: (newPup:Puppy) => void; 
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
    const [puppyDeleted, setPuppyDeleted] = useState(null); 

    useEffect(() => {
        if(breedName !== null){
            console.log("CONTEXT BREEDNAME CHANGED? " + breedName)
            setPuppyByBreed(breedName); 
            console.log("puppies after breedName changed: " + puppies)
        }
    }, [breedName, newPuppy, puppyDeleted]); 

    const setPuppyByBreed = async(breed:string): Promise<Puppy[]> => {
        try{
            let response = await getAllPuppiesByBreed(breed); 
            console.log("RESPONSE OF PUPPIES: " + response)
            setPuppies(response); 
            console.log("SET PUPPIES: " + puppies)
            return response; 
        } catch(error:any){
            console.log("error in context Puppy"); 
            return error; 
        }
    }; 

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

    const deletePuppyProfile = async(puppyId:string) => {
        try{
            console.log(puppyId); 
            let response = await deletePuppy(puppyId); 
            setPuppyByBreed(breedName!); 
            return response; 
        }catch(error:any){
            console.log("error in Puppy Context Delete"); 
            return error; 
        }
    }

    return(
        <PuppyContext.Provider value={{setPuppyByBreed, createNewPuppy, setBreedName, deletePuppyProfile,puppies, setNewPuppy, breedName}}> 
            {children}
        </PuppyContext.Provider>
    )
}

