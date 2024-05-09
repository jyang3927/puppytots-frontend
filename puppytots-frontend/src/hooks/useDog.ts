import {useContext} from "react"; 
import { DogContext } from "../context/DogContext";

export const useDog =() => {
    const context = useContext(DogContext); 
    if(context === undefined){
        throw new Error("useDog must be used within DogActivity"); 
    }
    return context;
}