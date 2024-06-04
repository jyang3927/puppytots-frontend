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

    const {breedName, editPuppyInfo} = usePuppy();

    const [sex, setSex] = useState(puppy.sex); 
    const [motherName, setMotherName] = useState(puppy.motherName); 
    const [fatherName, setFatherName] = useState(puppy.fatherName); 
    const [price, setPrice] = useState(puppy.price); 
    const [available, setAvailable] = useState(puppy.available); 
    const [birth, setBirth] = React.useState<Dayjs | null>(dayjs(puppy.birth)); 


    const [isEditable, setIsEditable] = useState<boolean>(false); 

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

        setSex(puppy.sex); 
        setBirth(dayjs(puppy.birth)); 
        setMotherName(puppy.motherName); 
        setFatherName(puppy.fatherName); 
        setPrice(puppy.price); 
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
                    className="AdminPuppyCardFormLabels"
                    id="puppyFather"
                    size="small"
                    disabled={isEditable}
                    label = "Father's Name"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    // onBlur={() => setIsEditable(false)}
                    />
                        <FormLabel sx={{fontSize:"12px"}}>Date of Birth</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker disabled={isEditable} slotProps={{textField:{size:'small'}}} value={birth} onChange={(newValue) => setBirth(newValue)} />
                        </LocalizationProvider> 
                </form>
                </CardContent>
                {isEditable === true ? 
                <Button variant="contained" size="small"  
                 sx={{backgroundColor:"#c9b694", color:"white", margin:"1rem 6rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"900", fontSize:".9rem",
                ':hover': {backgroundColor:'#9e7d41', color:"white"}}} onClick={() => makeEditable()}
                > Edit Puppy </Button>  
                : <div>
                <Button variant="contained" size="small"  
                sx={{backgroundColor:"#c9b694", color:"white", margin:"1rem 3rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"900", fontSize:".9rem",
               ':hover': {backgroundColor:'#9e7d41', color:"white"}}} onClick={() => submitEdits()}
                > Submit Edits </Button>
                <Button variant="contained" size="small"  
                sx={{backgroundColor:"#c9b694", color:"white", margin:"1rem 6rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"900", fontSize:".9rem",
               ':hover': {backgroundColor:'#9e7d41', color:"white"}}} onClick={() => submitEdits()}
                > Close </Button>
                </div>
                }
            </Card> 
        </div>
    )
}