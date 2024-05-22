import { Dog } from "../../models/Dog";
import dbAxiosInstance from "../helpers/dbAxiosInstace";

export const getAllDogs = async(): Promise<Dog[
]> => {
    try{
        const response = await dbAxiosInstance.get(`/ourDogs/getDogs`); 
        return response.data; 
    }catch(error:any){
        console.error("Failed to fetch dogs", error); 
        throw error; 
    }
}; 

export const createDog = async(dogData: Dog): Promise<Dog> => {
    try{
        const response = await dbAxiosInstance.post(`/ourDogs/dogPost`, dogData, {headers: {'Cache-Control': 'no-store'
        }}
        ); 
        return response.data; 
    }catch(error:any){
        console.error("Failed to create dog profile", error); 
        throw error; 
    }
};

export const deleteDog = async(dogId: string): Promise<void> => {
    try{
        await dbAxiosInstance.delete(`/ourDogs/${dogId}`); 
        console.log("Successfully deleted"); 
    } catch(error: any){
        console.error("Error failed to delete data", error); 
        throw error; 
    }
}