import { Button, TextField, Typography } from "@mui/material";
import { Puppy } from "../../models/Puppy"
import "../../styles/puppyCard.css"
import { usePuppy } from "../../hooks/usePuppy";
import { useAuth } from "../../hooks/useAuth";


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

interface PuppyProps{
    puppy: Puppy; 
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export function PuppyCard({puppy}: PuppyProps){

    let {deletePuppyProfile} = usePuppy(); 
    let {user, isBreeder} = useAuth(); 
    // let availablePuppy = () => {
    //     let setAvailable = "AVAILABLE";
    //     if(puppy.available === false){
    //         setAvailable = "I have found my family!"; 
    //         return setAvailable;
    //     }
    //     return setAvailable;
    // }

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    let puppyBirth = new Date(puppy.birth).toLocaleDateString();

    // TESTING
    // const [gender, setGender] = useState<string>("");


    return (
    <div className="nunito">
      {/* <Card sx={{ boxShadow:4, width: 345, backgroundColor:"white", color:"#9e7d41", margin:"2rem 0", borderRadius:"10px"}} className="nunito">
        <CardMedia
          component="img"
          height="350rem"
          width="300rem"
          image={puppy.imageName}
          alt="Puppy Image"
          sx={{borderBottomLeftRadius:"0px", borderBottomRightRadius:"70px", objectFit:"cover" }}
        />
        <CardActions disableSpacing>
          <TextField
            type="text"
            id="puppyGender"
            // disabled={!isEditable}
            value={puppy.sex}
            onChange={(e) => setGender(e.target.value)}
            // onBlur={() => setIsEditable(false)}
          />
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{textAlign:"center", display:"flex", flexDirection:"row", justifyContent:"center", margin:"0 0em", alignItems:"center"}}
          >
          <ExpandCircleDownIcon fontSize="large" sx={{display:"flex", color:"#d9d3b0"}}/>
        </ExpandMore>

        </CardActions>
      </Card>  */}
      <Card sx={{ boxShadow:4, width: 345, backgroundColor:"white", color:"#9e7d41", margin:"2rem 4rem", borderRadius:"10px"}} className="nunito">
        <CardMedia
          component="img"
          height="350rem"
          width="300rem"
          image={puppy.imageName}
          alt="Puppy Image"
          sx={{borderBottomLeftRadius:"0px", borderBottomRightRadius:"70px", objectFit:"cover" }}
        />
        <CardActions disableSpacing>
          <div>
            {/* <TextField value={puppy.sex} sx={{fontWeight: "800", fontFamily:"nunito", fontSize: "1.5rem", color:"#9e7d41"}}>
            {puppy.sex}
            </TextField> */}
            <Typography sx={{fontWeight: "800", fontFamily:"nunito", fontSize: "1.5rem", color:"#9e7d41"}}>
            {puppy.sex}
            </Typography>
            <Typography sx={{fontWeight: "600", fontFamily:"nunito", fontSize: "1rem", color:"#515151"}}>
            $ {puppy.price}
            </Typography>
          </div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{textAlign:"center", display:"flex", flexDirection:"row", justifyContent:"center", margin:"0 0 0 8em", alignItems:"center"}}
          >
            <ExpandCircleDownIcon fontSize="large" sx={{display:"flex", color:"#d9d3b0"}}/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="nunito PuppyCardContent">
            <Typography paragraph>
              <span className="LabelPuppy nunito">Mom:</span> <span className="nunito PuppyCardContent">{puppy.motherName}</span>
            </Typography>
            <Typography paragraph>
            <span className="LabelPuppy nunito">Father:</span> <span className="nunito PuppyCardContent">{puppy.fatherName}</span>
            </Typography>
            <Typography className="nunito">
            <span className="LabelPuppy nunito">Birthdate:</span> <span className="nunito PuppyCardContent">{puppyBirth}</span>
            </Typography>
          </CardContent>
        </Collapse>
        {/* {user?.email === 'yangjm1287@gmail.com' && 
        <Button variant="contained" size="small"  
          sx={{backgroundColor:"#c9b694", color:"white", margin:"1rem 6rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"900", fontSize:".9rem",
              ':hover': {backgroundColor:'#9e7d41', color:"white"}}} 
          
          onClick={() => <PuppyCard puppy={puppy}/>}
          > Edit Puppy</Button>} */}
      </Card>
    </div>
    )
}