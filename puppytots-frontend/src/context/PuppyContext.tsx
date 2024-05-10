import {ReactNode, createContext, useState, useEffect} from "react"; 
import { Puppy } from "../models/Puppy";
import { getAllPuppiesByBreed } from "../services/database/dbPuppies";

interface PuppyContextType{
    setPuppyByBreed:(breed:string) => Promise<Puppy[]>; 
    setBreedName:(breed:string) => void; 
    puppies:Puppy[] | null; 
    breedName: string | null;
}

export const PuppyContext = createContext<PuppyContextType | undefined>(undefined); 

interface PuppyContextProviderProps{
    children: ReactNode; 
}; 

export const PuppyProvider = ({children}: PuppyContextProviderProps) => {
    const [puppies, setPuppies] = useState<Puppy[] | null>(null); 
    const [breedName, setBreedName] = useState<string | null>(null); 

    useEffect(() => {
        if(breedName !== null){
            console.log("CONTEXT BREEDNAME CHANGED? " + breedName)
            setPuppyByBreed(breedName); 
            console.log("puppies after breedName changed: " + puppies)
        }
    }, [breedName]); 

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

    return(
        <PuppyContext.Provider value={{setPuppyByBreed, setBreedName, puppies, breedName}}> 
            {children}
        </PuppyContext.Provider>
    )
}

