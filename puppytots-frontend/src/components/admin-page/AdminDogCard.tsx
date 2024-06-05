import { Card, CardMedia, TextField, CardContent, FormLabel, Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../../styles/adminPuppyCard.css"
import { Dog } from "../../models/Dog";
import { useDog } from "../../hooks/useDog";

interface DogProps{
    dog: Dog; 
}

export function AdminDogCard({dog}: DogProps){

    const {deleteOurDog, editDogInfo} = useDog(); 

    const [sex, setSex] = useState(dog.sex); 
    const [breed, setBreed] = useState(dog.breed); ; 
    const [details, setDetails] = useState(dog.details); 
    const [name, setName] = useState(dog.name); 
    const [weight, setWeight] = useState(dog.weight); 

    const [isEditable, setIsEditable] = useState<boolean>(true); 

    function makeEditable(){
        setIsEditable(!isEditable); 
    }

    const handleChangeBreed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBreed((event.target as HTMLInputElement).value);
    };

    function submitEdits(){
        let dogEdits = {breed:breed, sex:sex, weight:weight, name:name, details: details, imageUrl: dog.imageUrl}
        editDogInfo(dogEdits, dog._id!); 
        makeEditable(); 
        setSex(dog.sex); 
        setBreed(dog.breed)
        setName(dog.name); 
        setWeight(dog.weight); 
        setDetails(dog.details); 
    }
    

    return(
        <div className="nunito">
            <Card sx={{ boxShadow:4, width: 345, backgroundColor:"white", color:"#9e7d41", margin:"2rem 4rem", borderRadius:"10px"}} className="nunito">
                <CardMedia
                component="img"
                height="350rem"
                width="300rem"
                image={dog.imageUrl}
                alt="Dog Image"
                sx={{borderBottomLeftRadius:"0px", borderBottomRightRadius:"70px", objectFit:"cover" }}
                />
                <CardContent className="nunito PuppyCardContent">
                    <form className="NewDogForm" encType="multipart/form-data">
                    <TextField
                        type="text"
                        sx={{margin: ".5rem 0"}}
                        className="AdminPuppyCardFormLabels"
                        size="small"
                        disabled={isEditable}
                        label = "Gender"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    />
                    {/* <TextField
                        type="text"
                        sx={{margin: ".5rem 0"}}
                        className="AdminPuppyCardFormLabels"
                        size="small"
                        disabled={isEditable}
                        label = "Breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    /> */}
                    <FormLabel>Breed</FormLabel>
                    <RadioGroup row value={breed} onChange={handleChangeBreed}>
                        <FormControlLabel disabled={isEditable} value="maltipoo" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Maltese" />
                        <FormControlLabel disabled={isEditable} value="toy-poodle" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Toy-Poodle" />
                        <FormControlLabel disabled={isEditable} value="shihpoo" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Maltipoo" />
                    </RadioGroup>
                    <TextField
                        className="AdminPuppyCardFormLabels"
                        sx={{margin: ".5rem 0"}}
                        type="text"
                        size="small"
                        disabled={isEditable}
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                    type="number"
                    sx={{margin: ".5rem 0"}}
                    className="AdminPuppyCardFormLabels"
                    size="small"
                    disabled={isEditable}
                    label = "Weight"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    />
                    <TextField
                    multiline={true}
                    rows={2}
                    sx={{margin: ".5rem 0"}}
                    className="AdminPuppyCardFormLabels"
                    size="small"
                    disabled={isEditable}
                    label = "Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    />
                </form>
                </CardContent>
                {isEditable === true ? 
                <Button variant="contained" size="small"  
                 sx={{backgroundColor:"#c9b694", color:"white", margin:"1rem 8.5rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"900", fontSize:".9rem",
                ':hover': {backgroundColor:'#9e7d41', color:"white"}}} onClick={() => makeEditable()}
                > Edit </Button>  
                : <div className="AdminPuppyFormButtons">
                <Button variant="contained" size="small"  
                sx={{backgroundColor:"#c9b694", color:"white", margin:"1rem 1rem 1rem 1rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"800", fontSize:".9rem", display:'flex', justifyContent:"center",
               ':hover': {backgroundColor:'#5D786B', color:"white"}}} onClick={() => submitEdits()}
                > Done </Button>
                <Button variant="outlined" size="small"  
                sx={{backgroundColor:"white", border: "1px solid #c9b694", color:"#c9b694", margin:"1rem 1rem 1rem 9.5rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"800", fontSize:".9rem",
               ':hover': {backgroundColor:'#8B0000', color:"white"}}} onClick={() => deleteOurDog(dog._id!)}
                > Delete </Button>
                </div>
                }
            </Card> 
        </div>
    )
}