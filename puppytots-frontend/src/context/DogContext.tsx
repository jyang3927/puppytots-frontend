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
    updateDogInfo:Dog | null; 
}

export const DogContext = createContext<DogContextType | undefined>(undefined); 

interface DogContextProviderProps{
    children: ReactNode; 
}; 

export const DogProvider = ({children}: DogContextProviderProps) => {
    
    const [ourDogsList, setOurDogsList] = useState<Dog[] | null>(null); 
    const [newDog, setNewDog] = useState<Dog | null>(null); 
    const [updateDogInfo, setUpdateDogInfo] = useState<Dog | null>(null);
    const [dogDeleted, setDogDeleted] = useState(null); 

    useEffect(() => {
        getAllOurDogs(); 
        console.log("USE EFFECT GET ALL DOGS", ourDogsList)
    }, [newDog, updateDogInfo]); 

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
            console.log("GET ALL DOGS SET OUR DOGS LIST", ourDogsList)
            console.log("GET ALL DOGS SET OUR DOGS LIST RESPONSE", response)
            return response; 
        }catch(error:any){
            console.log("Error in context get all Dogs"); 
            return error;
        }
    }; 

    const editDogInfo = async(dog:Dog, dogId:string): Promise<Dog> => {
        try{
            let response = await updateDog(dog, dogId); 
            setUpdateDogInfo(response); 
            // setNewDog(response)
            // let refreshDogList = await getAllOurDogs(); 
            // setOurDogsList(refreshDogList)
            console.log("UPDATED DOG INFO ", updateDogInfo)
            return response; 
        }catch(error:any){
            console.log("error in Puppy Context Patch"); 
            return error; 
        }
    }

    const deleteOurDog = async(dogId:string) => {
        try{
            let response = await deleteDog(dogId); 
            let refreshGetAllDogs = getAllOurDogs();
            return response; 
        }catch(error:any){
            console.log("error in Dog Context Delete"); 
            return error; 
        }
    }
    return(
        <DogContext.Provider value={{createNewDog, getAllOurDogs, setNewDog, deleteOurDog, editDogInfo, ourDogsList, updateDogInfo}}>
            {children}
        </DogContext.Provider>
    )
    
}