import { Box, Button, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import '../../styles/ourDogForm.css'; 
import { useDog } from "../../hooks/useDog";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebaseConfig";
import { CloudUpload } from "@mui/icons-material";
import React from "react";

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
            <Button color="secondary" variant="contained" size="small" onClick={handleOpen} >Add new dog</Button>
            <Modal open={open} onClose={handleClose} >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, overflow:"auto", height: "80%" }}>
                    <form onSubmit={handleSubmit} className="NewDogForm" encType="multipart/form-data">
                    <h3 style={{textAlign: 'center', marginBottom: "15px", fontSize: '25px', marginTop: '0'}} className="ContactUsTitle sniglet-extrabold">Add New Dog</h3>
                    <TextField label="Name" variant="outlined" margin="normal" color="secondary" size="small" value={name} onChange={(e) => setName(e.target.value)}/>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row value={sex} onChange={handleChangeSex}>
                        <FormControlLabel value="female" control={<Radio color="secondary" size="small" />} label="Female" />
                        <FormControlLabel value="male" control={<Radio color="secondary" size="small" />} label="Male" />
                    </RadioGroup>
                    <FormLabel>Breed</FormLabel>
                    <RadioGroup row value={breed} onChange={handleChangeBreed}>
                        <FormControlLabel value="Maltipoo" control={<Radio color="secondary" size="small" />} label="Maltipoo" />
                        <FormControlLabel value="Toy-poodle" control={<Radio color="secondary" size="small" />} label="Toy-Poodle" />
                        <FormControlLabel value="Shihpoo" control={<Radio color="secondary" size="small" />} label="Shihpoo" />
                    </RadioGroup>
                    <TextField label="Weight" variant="outlined" margin="normal" color="secondary" size="small" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
                    <TextField label="Details" type="text" variant="outlined" margin="normal" color="secondary" size="small" multiline value={details} onChange={(e) => setDetails(e.target.value)}/>
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"  
                        tabIndex={-1}
                        startIcon={<CloudUpload />}
                        color="secondary"
                        >
                        Upload picture
                        {/* <VisuallyHiddenInput type="file" name="image" onChange={handleOnChange}/> */}
                        <input type="file" name="image" onChange={handleOnChange}/>
                    </Button>
                    <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}
