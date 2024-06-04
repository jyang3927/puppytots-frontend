import { Box, Button, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField, styled } from "@mui/material";
import { useEffect, useState } from "react";
import '../../styles/ourDogForm.css'; 
import { useDog } from "../../hooks/useDog";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebaseConfig";
import { CloudUpload } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

import React from "react";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'wrap',
    width: 1,
  });
  

export function OurDogsForm(){

    const {createNewDog} = useDog(); 

    const [file, setFile] = React.useState<File | undefined>(undefined); 
    const [imageUrl, setImageUrl] = useState<string | undefined>(""); 


    const [open, setOpen] = useState(false); 
    const [sex, setSex] = useState("female"); 
    const [breed, setBreed] = useState(""); 
    const [name, setName] = useState(""); 
    const [weight, setWeight] = useState(0); 
    const [details, setDetails] = useState(""); 

    const handleOpen = () => {
        setOpen(true); 
    }; 

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeSex = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSex((event.target as HTMLInputElement).value);
    };
    const handleChangeBreed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBreed((event.target as HTMLInputElement).value);
    };

    const handleOnChange = async (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement & {
            files: FileList; 
        }
        setFile(target.files[0]);
    }

    const uploadFile= async () => {
        if(!file) return; 
        const randomImageName = () => crypto.randomUUID().toString(); 
        let randomName = randomImageName(); 
        const imageRef = ref(storage, `puppytots/dogImages/${randomName} `);
        try{
            uploadBytes(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log("URL IMAGE", url)
                    setImageUrl(url); 
                })
            })
        }catch(error:any){
            console.error("Error loading image to storage")
        }
    }

    useEffect(() => {
        if(imageUrl){
            let newDog = {breed:breed, sex:sex, name:name, weight:weight, details:details, imageUrl:imageUrl}; 
            createNewDog(newDog);
        }
        
    },[imageUrl]) 

    async function handleSubmit(e:React.SyntheticEvent){
        e.preventDefault();

        await uploadFile(); 

    }


    return(
        <div className="OurDogsForm"> 
            <Button variant="contained" sx={{':hover': {backgroundColor:'white', color:"#ae8f57"},width:"15rem", height:"2.5rem", fontSize:"1.3rem", margin:"0", padding:"0", display:"flex", backgroundColor:'#ae8f57', fontFamily:"nunito, sans-serif", fontWeight:"800"}}  onClick={handleOpen} >Add new parent</Button>
            <Modal open={open} onClose={handleClose} >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, overflow:"auto", height: "80%" }}>
                    <form onSubmit={handleSubmit} className="NewDogForm" encType="multipart/form-data">
                    <h3 style={{textAlign: 'center', marginBottom: "15px", fontSize: '3rem', marginTop: '0'}} className="AddNewPuppyHeader nunito">Add New Parent</h3>
                    <TextField label="Name" variant="outlined" margin="normal" color="secondary" size="small" value={name} onChange={(e) => setName(e.target.value)}/>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row value={sex} onChange={handleChangeSex}>
                        <FormControlLabel value="Female" control={<Radio sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Male" />
                    </RadioGroup>
                    <FormLabel>Breed</FormLabel>
                    <RadioGroup row value={breed} onChange={handleChangeBreed}>
                        <FormControlLabel value="maltipoo" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Maltese" />
                        <FormControlLabel value="toy-poodle" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Toy-Poodle" />
                        <FormControlLabel value="shihpoo" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Maltipoo" />
                    </RadioGroup>
                    <TextField label="Weight" variant="outlined" margin="normal" size="small" sx={{" & .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":{borderColor:"#ae8f57", color:"#ae8f57"},'& .MuiInputLabel-root.Mui-focused':{color:"#ae8f57"} }} value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
                    <TextField label="Details" type="text" variant="outlined" margin="normal" size="small" sx={{" & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":{borderColor:"#ae8f57", color:"#ae8f57"},'& .MuiInputLabel-root.Mui-focused':{color:"#ae8f57"} }} multiline value={details} onChange={(e) => setDetails(e.target.value)}/>
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"  
                        tabIndex={-1}
                        startIcon={<CloudUpload />}
                        sx={{color:"#9e7d41", border:"1px solid #c9b694", margin:".7rem 0", ':hover': {backgroundColor:'white', color:"#ae8f57", border:"1px solid #9e7d41",}}}
                        >
                        Upload picture
                        <VisuallyHiddenInput type="file" name="image" onChange={handleOnChange}/>
                        {/* <input type="file" name="image" onChange={handleOnChange}/> */}
                    </Button>
                    <Button type="submit" variant="contained"sx={{backgroundColor:"#c9b694", color:"white", margin:".6rem 0", fontFamily:"nunito, sans-serif", fontWeight:"900", ':hover': {backgroundColor:'#9e7d41', color:"white"}}} >Submit</Button>
                    </form>
                    <Button variant="text"sx={{backgroundColor:"white", borderRadius:"100px", color:"#c9b694", margin:".9rem 0", fontFamily:"nunito, sans-serif", fontWeight:"900", textAlign:"center", marginLeft:"22rem", ':hover': {backgroundColor:'#c9b694', color:"white"}}} onClick={() => handleClose()} >
                        <CloseIcon />
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}
