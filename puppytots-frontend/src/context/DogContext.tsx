import {ReactNode, createContext, useState, useEffect} from "react"; 
import { Dog } from "../models/Dog";
import { createDog, deleteDog, getAllDogs, updateDog } from "../services/database/dbDogs";
import { get } from "http";

interface DogContextType{
    createNewDog:(newDog:Dog) => Promise<Dog>; 
    getAllOurDogs:() => Promise<Dog[]>;
    deleteOurDog:(dogId:string) => Promise<void>; 
    setNewDog:(newDog: Dog) => void;
    editDogInfo:(dog:Dog, dogId: string) => Promise<Dog>;
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
    }, [newDog]); 

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

    const editDogInfo = async(dog:Dog, dogId:string): Promise<Dog> => {
        try{
            let response = await updateDog(dog, dogId); 
            getAllDogs(); 
            return response; 
        }catch(error:any){
            console.log("error in Puppy Context Patch"); 
            return error; 
        }
    }

    const deleteOurDog = async(dogId:string) => {
        try{
            let response = await deleteDog(dogId); 
            getAllOurDogs(); 
            return response; 
        }catch(error:any){
            console.log("error in Dog Context Delete"); 
            return error; 
        }
    }
    return(
        <DogContext.Provider value={{createNewDog, getAllOurDogs, setNewDog, deleteOurDog, editDogInfo, ourDogsList}}>
            {children}
        </DogContext.Provider>
    )
    
}