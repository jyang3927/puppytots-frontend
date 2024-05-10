import {ReactNode, createContext, useState, useEffect} from "react"; 
import { Dog } from "../models/Dog";
import { createDog, getAllDogs } from "../services/database/dbDogs";

interface DogContextType{
    createNewDog:(newDog:Dog) => Promise<Dog>; 
    getAllOurDogs:() => Promise<Dog[]>;
    setNewDog:(newDog: Dog) => void;
    ourDogsList: Dog[] | null; 
}

export const DogContext = createContext<DogContextType | undefined>(undefined); 

interface DogContextProviderProps{
    children: ReactNode; 
}; 

export const DogProvider = ({children}: DogContextProviderProps) => {
    
    const [ourDogsList, setOurDogsList] = useState<Dog[] | null>(null); 
    const [newDog, setNewDog] = useState<Dog | null>(null); 

    useEffect(() => {
        getAllOurDogs(); 
    }, []); 

    const createNewDog = async(newDog:Dog): Promise<Dog> => {
        try{
            let response = await createDog(newDog); 
            setNewDog(response); 
            return response; 
        }catch(error:any){
            console.log("error in context Dog"); 
            return error; 
        }
    }; 

    const getAllOurDogs = async(): Promise<Dog[]> => {
        try{
            let response = await getAllDogs(); 
            setOurDogsList(response);
            return response; 
        }catch(error:any){
            console.log("Error in context get all Dogs"); 
            return error;
        }
    }; 

    return(
        <DogContext.Provider value={{createNewDog, getAllOurDogs, setNewDog, ourDogsList}}>
            {children}
        </DogContext.Provider>
    )
    
}