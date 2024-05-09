import { useContext } from "react";
import { PuppyContext } from "../context/PuppyContext";

export const usePuppy = () => {
    const context = useContext(PuppyContext); 
    if (context === undefined){
        throw new Error("usePuppy must be used within PuppyActivity"); 
    }
    return context; 
}