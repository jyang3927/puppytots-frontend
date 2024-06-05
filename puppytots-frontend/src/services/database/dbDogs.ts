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

export const updateDog = async(dog:Dog, dogId:string): Promise<Dog> => {
    try{
        let response = await dbAxiosInstance.patch(`/dogs/update/${dogId}`, dog); 
        return response.data;
    }catch(error:any){
        console.error("Failed to update puppy profile", error.response.data); 
        throw error; 
    }
}; 

export const deleteDog = async(dogId: string) => {
    try{
        let response = await dbAxiosInstance.delete(`/ourDogs/${dogId}`); 
        console.log("Successfully deleted"); 
        return response;
    } catch(error: any){
        console.error("Error failed to delete data", error); 
        throw error; 
    }
}