import { Card, CardMedia, TextField, CardContent, FormLabel, Button } from "@mui/material";
import { Puppy } from "../../models/Puppy";
import { useState } from "react";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../../styles/adminPuppyCard.css"
import { usePuppy } from "../../hooks/usePuppy";

interface PuppyProps{
    puppy: Puppy; 
}

export function AdminPuppyCard({puppy}: PuppyProps){

    const {breedName, editPuppyInfo, deletePuppyProfile} = usePuppy();

    const [sex, setSex] = useState(puppy.sex); 
    const [motherName, setMotherName] = useState(puppy.motherName); 
    const [fatherName, setFatherName] = useState(puppy.fatherName); 
    const [price, setPrice] = useState(puppy.price); 
    const [available, setAvailable] = useState(puppy.available); 
    const [birth, setBirth] = React.useState<Dayjs | null>(dayjs(puppy.birth)); 


    const [isEditable, setIsEditable] = useState<boolean>(true); 

    function makeEditable(){
        setIsEditable(!isEditable); 
    }

    function submitEdits(){
        let birthDate;
            if(birth !== null){
                birthDate = birth?.toDate(); 
            }else {
                birthDate = puppy.birth; 
            }
        let puppyEdits = {breed:puppy.breed, motherName:motherName, fatherName:fatherName, birth:birthDate, sex:sex, price:price, available:available, imageName: puppy.imageName}
        editPuppyInfo(puppyEdits, puppy._id!); 
        makeEditable(); 
        // setSex(puppy.sex); 
        // setBirth(dayjs(puppy.birth)); 
        // setMotherName(puppy.motherName); 
        // setFatherName(puppy.fatherName); 
        // setPrice(puppy.price); 
    }
    

    return(
        <div className="nunito">
            <Card sx={{ boxShadow:4, width: 345, backgroundColor:"white", color:"#9e7d41", margin:"2rem 4rem", borderRadius:"10px"}} className="nunito">
                <CardMedia
                component="img"
                height="350rem"
                width="300rem"
                image={puppy.imageName}
                alt="Puppy Image"
                sx={{borderBottomLeftRadius:"0px", borderBottomRightRadius:"70px", objectFit:"cover" }}
                />
                <CardContent className="nunito PuppyCardContent">
                    <form className="NewDogForm" encType="multipart/form-data">
                    <TextField
                        type="text"
                        sx={{margin: ".5rem 0"}}
                        className="AdminPuppyCardFormLabels"
                        id="puppyGender"
                        size="small"
                        disabled={isEditable}
                        label = "Gender"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    />
                    <TextField
                        className="AdminPuppyCardFormLabels"
                        sx={{margin: ".5rem 0"}}
                        type="text"
                        id="puppyMother"
                        size="small"
                        disabled={isEditable}
                        label="Mother's Name"
                        value={motherName}
                        onChange={(e) => setMotherName(e.target.value)}
                    />
                    <TextField
                    type="text"
                    sx={{margin: ".5rem 0"}}
                    className="AdminPuppyCardFormLabels"
                    id="puppyFather"
                    size="small"
                    disabled={isEditable}
                    label = "Father's Name"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    />
                    <TextField
                    type="text"
                    sx={{margin: ".5rem 0"}}
                    className="AdminPuppyCardFormLabels"
                    id="puppyFather"
                    size="small"
                    disabled={isEditable}
                    label = "Price"
                    value={price}
                    onChange={(e) => setFatherName(e.target.value)}
                    />
                    <FormLabel sx={{fontSize:"12px"}}>Date of Birth</FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker disabled={isEditable} slotProps={{textField:{size:'small'}}} value={birth} onChange={(newValue) => setBirth(newValue)} />
                    </LocalizationProvider> 
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
                > Update </Button>
                <Button variant="outlined" size="small"  
                sx={{backgroundColor:"white", border: "1px solid #c9b694", color:"#c9b694", margin:"1rem 1rem 1rem 9.5rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"800", fontSize:".9rem",
               ':hover': {backgroundColor:'#8B0000', color:"white"}}} onClick={() => deletePuppyProfile(puppy._id!)}
                > Delete </Button>
                </div>
                }
            </Card> 
        </div>
    )
}