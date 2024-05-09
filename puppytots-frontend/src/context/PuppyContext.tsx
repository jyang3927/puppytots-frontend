import {ReactNode, createContext, useState, useEffect} from "react"; 
import { Puppy } from "../models/Puppy";

interface PuppyContextType{
    getPuppyByBreed:(breed:string) => Puppy[]; 
}

export const PuppyContext = createContext<PuppyContextType | undefined>(undefined); 

interface PuppyContextProviderProps{
    children: ReactNode; 
}; 

export const PuppyProvider = ({children}: PuppyContextProviderProps) => {
    const [puppies, setPuppies] = useState<Puppy[] | null>(null); 

    useEffect(() => {
        
    }, []); 

    const getPuppyByBreed = async(breed:string): Promise<Puppy[]> => {
        try{
            let response = await getPuppyByBreed(breed); 
            setPuppies(response); 
            return response; 
        } catch(error:any){
            console.log("error in context Puppy"); 
            return error; 
        }
    }
}

