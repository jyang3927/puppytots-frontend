import {ReactNode, createContext, useState, useEffect} from "react"; 
import { Dog } from "../models/Dog";

interface DogContextType{

}

export const DogContext = createContext<DogContextType | undefined>(undefined); 

interface DogContextProviderProps{
    children: ReactNode; 
}; 

export const DogProvider = ({children}: DogContextProviderProps) => {

    
}