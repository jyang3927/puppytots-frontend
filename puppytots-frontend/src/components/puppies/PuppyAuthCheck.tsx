import { useAuth } from "../../hooks/useAuth";
import { Puppy } from "../../models/Puppy";
import { AdminPuppyCard } from "../admin-page/AdminPuppyCard";
import { PuppyCard } from "./PuppyCard";

interface PuppyAuthCheckProps{
    puppy: Puppy;
}

export function PuppyAuthCheck({puppy}:PuppyAuthCheckProps){
    const {isBreeder} = useAuth(); 
    
    console.log(isBreeder)
    if(isBreeder === true){
        return<AdminPuppyCard puppy={puppy}/>
    }
    
    return <PuppyCard puppy={puppy}/>
}