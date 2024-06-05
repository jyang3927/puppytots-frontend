import { Alert, Box, Button, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CloudUpload } from "@mui/icons-material";
import { usePuppy } from "../../hooks/usePuppy";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebaseConfig";
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/addNewPuppy.css'


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
  

export function NewPuppyForm(){

    let currentdate = new Date(); 

    const {createNewPuppy} = usePuppy(); 

    const [file, setFile] = React.useState<File | undefined>(undefined); 

    const [imageUrl, setImageUrl] = useState<string | undefined>(""); 

    const [open, setOpen] = useState(false); 
    const [sex, setSex] = useState("Female"); 
    const [breed, setBreed] = useState(""); 
    const [motherName, setMotherName] = useState(""); 
    const [fatherName, setFatherName] = useState(""); 
    const [price, setPrice] = useState(0); 
    const [available, setAvailable] = useState(true); 
    const [birth, setBirth] = React.useState<Dayjs | null>(dayjs(currentdate)); 

    const handleOpen = () => {
        setOpen(true); 
    }; 

    const handleClose = () => {
        setOpen(false);
    };

    // const handleSubmit= (e:FormEvent) => {
    //     e.preventDefault();
    //     let birthDate;
    //     if(birth !== null){
    //         birthDate = birth?.toDate(); 
    //     }else {
    //         birthDate = new Date(); 
    //     }
    //     console.log("CREATING NEW PUPPY" + breed + motherName + fatherName+ birthDate + sex + price + available); 
        
    //     createNewPuppy({breed:breed, motherName:motherName, fatherName:fatherName, birth:birthDate, sex:sex, price:price, available:available, imageName:"" }); 
    // }

    const handleChangeSex = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSex((event.target as HTMLInputElement).value);
    };

    const handleChangeBreed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBreed((event.target as HTMLInputElement).value);
    };

    const handleOnChange = async (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement & {
            files: FileList; 
        }
        setFile(target.files[0]);
    }


    const uploadFile= async () => {
        if(!file) return; 
        const randomImageName = () => crypto.randomUUID().toString(); 
        let randomName = randomImageName(); 
        const imageRef = ref(storage, `puppytots/puppyImages/${randomName} `);
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
        // let urlSet = await getDownloadURL(ref(storage, `puppytots/puppyImages/${randomName} `)); 
        // setImageUrl(urlSet)
        
        
        // .then((snapshot) => {
        // getDownloadURL(snapshot.ref).then((url) => {
        //     urlSet = url;
        //     })
        // })
        // return urlSet;
    }

    useEffect(() => {

        if(imageUrl){
            let birthDate;
            if(birth !== null){
                birthDate = birth?.toDate(); 
            }else {
                birthDate = new Date(); 
            }
            console.log("CREATING NEW PUPPY" + breed + motherName + fatherName+ birthDate + sex + price + available+imageUrl); 
            
            let newPup = {breed:breed, motherName:motherName, fatherName:fatherName, birth:birthDate, sex:sex, price:price, available:available, imageName: imageUrl }; 
            createNewPuppy(newPup); 
            setSex(""); 
            setBreed(""); 
            setMotherName(""); 
            setFatherName(""); 
            setPrice(0); 
            setBirth(dayjs(currentdate)); 
            handleClose(); 
        }


    }, [imageUrl])

    async function handleOnSubmit(e:React.SyntheticEvent){
        e.preventDefault(); 
        console.log("FileName", file)
        await uploadFile(); 
        // const formData = new FormData(); 
        // formData.append
        // setImageUrl(imageLocation);
        // let birthDate;
        // if(birth !== null){
        //     birthDate = birth?.toDate(); 
        // }else {
        //     birthDate = new Date(); 
        // }
        // console.log("CREATING NEW PUPPY" + breed + motherName + fatherName+ birthDate + sex + price + available+imageUrl); 
        
        // let newPup = {breed:breed, motherName:motherName, fatherName:fatherName, birth:birthDate, sex:sex, price:price, available:available, imageName: imageUrl }; 

        // // formData.append('puppyData', JSON.stringify(newPup)); 

        // // formData.append('image', file); 
        
        // await createNewPuppy(newPup); 
        // await axios.post("/api/puppies", formData, {headers: {'Content-Type': 'multipart/form-data'}})
    }

    return(
        <div>
            <div className="NewPuppyForm"> 
            <Button  variant="contained" sx={{':hover': {backgroundColor:'white', color:"#ae8f57"},width:"15rem", height:"2.5rem", fontSize:"1.3rem", margin:"0", padding:"0", display:"flex", backgroundColor:'#ae8f57', fontFamily:"nunito, sans-serif", fontWeight:"800"}} onClick={handleOpen}>Add new puppy</Button>
            <Modal open={open} onClose={handleClose} >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, overflow:"auto", height: "80%"}}>
                    <form onSubmit={handleOnSubmit} className="NewDogForm" encType="multipart/form-data">
                    <h3 style={{textAlign: 'center', marginBottom: "15px", marginTop: '0'}} className="AddNewPuppyHeader nunito">Add New Puppy</h3>
                    <FormLabel>Date of Birth</FormLabel>                  
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker value={birth} onChange={(newValue) => setBirth(newValue)} />
                    </LocalizationProvider>                 
                    <FormLabel sx={{marginTop:".3rem"}}>Gender</FormLabel>
                    <RadioGroup row value={sex} onChange={handleChangeSex}>
                        <FormControlLabel value="Female" control={<Radio sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Male" />
                    </RadioGroup>
                    <FormLabel>Breed</FormLabel>
                    <RadioGroup row value={breed} onChange={handleChangeBreed}>
                        <FormControlLabel value="maltipoo" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Maltipoo" />
                        <FormControlLabel value="toy-poodle" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Toy-Poodle" />
                        <FormControlLabel value="shihpoo" control={<Radio  sx={{color: "#EDE8D1", "&.Mui-checked": {color: "#9e7d41"}}} size="small" />} label="Shihpoo" />
                    </RadioGroup>
                    <TextField label="Mother's Name" variant="outlined" margin="normal" sx={{" & .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":{borderColor:"#ae8f57", color:"#ae8f57"},'& .MuiInputLabel-root.Mui-focused':{color:"#ae8f57"} }} size="small" value={motherName} onChange={(e) => setMotherName(e.target.value)}/>
                    <TextField label="Father's Name" variant="outlined" margin="normal" sx={{" & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":{borderColor:"#ae8f57", color:"#ae8f57"},'& .MuiInputLabel-root.Mui-focused':{color:"#ae8f57"} }} size="small"  value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                    <TextField label="Price" variant="outlined" margin="normal" sx={{" & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":{borderColor:"#ae8f57", color:"#ae8f57"},'& .MuiInputLabel-root.Mui-focused':{color:"#ae8f57"} }} size="small"  value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"  
                        tabIndex={-1}
                        startIcon={<CloudUpload />}
                        sx={{color:"#9e7d41", border:"1px solid #c9b694", margin:".7rem 0", ':hover': {backgroundColor:'white', color:"#ae8f57", border:"1px solid #9e7d41",}}}
                        >
                        Upload photo
                        <VisuallyHiddenInput type="file" name="image" onChange={handleOnChange}/>
                        {/* <input type="file" name="image" className="inputFile" onChange={handleOnChange}/> */}

                    </Button>
                    <Button type="submit" variant="contained"sx={{backgroundColor:"#c9b694", color:"white", margin:".6rem 0", fontFamily:"nunito, sans-serif", fontWeight:"900", ':hover': {backgroundColor:'#9e7d41', color:"white"}}} >Submit</Button>
                    </form>
                    <Button variant="text" sx={{backgroundColor:"white", borderRadius:"100px", color:"#c9b694", margin:".9rem 0", fontFamily:"nunito, sans-serif", fontWeight:"900", textAlign:"center", marginLeft:"22rem", ':hover': {backgroundColor:'#c9b694', color:"white"}}} onClick={() => handleClose()} >
                        <CloseIcon />
                    </Button>
                </Box>
            </Modal>
        </div>
        </div>
    )
}

