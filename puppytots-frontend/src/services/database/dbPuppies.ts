import { Puppy } from "../../models/Puppy";
import dbAxiosInstance from "../helpers/dbAxiosInstace";

export const getAllPuppiesByBreed = async(breed: string): Promise<Puppy[]> => {
    try{
        const response = await dbAxiosInstance.get(`/puppies/${breed}`); 
        console.log("RESPONSE FROM SERVICE ALL PUPPIES" + response.data)
        return response.data; 
    }catch(error:any){
        console.error("Failed to fetch puppies", error); 
        throw error;
    }; 
}

export const createPuppy = async(puppyData: Puppy): Promise<Puppy> => {
    try{
        
        // console.log("PUPPY DATA AFTER MULTIPART", puppyData.entries()); 
        const response = await dbAxiosInstance.post(`/puppies`, puppyData); 
        return response.data; 
    }catch(error:any){
        console.error("Failed to create puppy profile", error.response.data); 
        throw error; 
    }
}; 

export const deletePuppy = async(puppyId: string): Promise<void> => {
    try{
        await dbAxiosInstance.delete(`/puppies/${puppyId}`); 
        console.log("Successfully deleted"); 
    }catch(error:any){
        console.error("Error failed to delete data", error); 
        throw error;
    }
}; 