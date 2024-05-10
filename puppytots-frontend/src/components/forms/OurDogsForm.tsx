import { Box, Button, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import '../../styles/ourDogForm.css'; 

export function OurDogsForm(){

    const [open, setOpen] = useState(false); 
    const [sex, setSex] = useState("female"); 
    const [breed, setBreed] = useState(""); 

    const handleOpen = () => {
        setOpen(true); 
    }; 

    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        
    }

    const handleChangeSex = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSex((event.target as HTMLInputElement).value);
    };
    const handleChangeBreed = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBreed((event.target as HTMLInputElement).value);
    };

    return(
        <div className="OurDogsForm"> 
            <Button color="secondary" variant="contained" size="small" onClick={handleOpen}>Add new dog</Button>
            <Modal open={open} onClose={handleClose} >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <form onSubmit={handleSubmit} className="NewDogForm">
                    <h3 style={{textAlign: 'center', marginBottom: "15px", fontSize: '25px', marginTop: '0'}} className="ContactUsTitle sniglet-extrabold">Add New Dog</h3>
                    <TextField label="Name" variant="outlined" margin="normal" color="secondary" size="small" focused/>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row value={sex} onChange={handleChangeSex}>
                        <FormControlLabel value="female" control={<Radio color="secondary" size="small" />} label="Female" />
                        <FormControlLabel value="male" control={<Radio color="secondary" size="small" />} label="Male" />
                    </RadioGroup>
                    <FormLabel>Breed</FormLabel>
                    <RadioGroup row value={breed} onChange={handleChangeBreed}>
                        <FormControlLabel value="maltipoo" control={<Radio color="secondary" size="small" />} label="Maltipoo" />
                        <FormControlLabel value="toy-poodle" control={<Radio color="secondary" size="small" />} label="Toy-Poodle" />
                        <FormControlLabel value="shihpoo" control={<Radio color="secondary" size="small" />} label="Shihpoo" />
                    </RadioGroup>
                    <TextField label="Weight" variant="outlined" margin="normal" color="secondary" size="small" focused />
                    <TextField label="Details" type="text" variant="outlined" margin="normal" color="secondary" size="small" multiline focused />
                    <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => handleClose()}>Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}
