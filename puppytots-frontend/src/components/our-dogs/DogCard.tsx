import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, Typography, styled } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useDog } from "../../hooks/useDog";
import { Dog } from "../../models/Dog"
import "../../styles/dogCard.css"
import { useState } from "react";

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

interface DogCardProps{
    dogInfo:Dog; 
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
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

export function DogCard({dogInfo}:DogCardProps){

  const{user} = useAuth();
  const {deleteOurDog} = useDog(); 
    // let{deleteOurDog} = useDog(); 
    // let{user} = useAuth(); 
    
    // return(
    //     <div className="DogCard sniglet-regular">
    //         <h3 className="DogInfoName">{dogInfo.name}</h3>
    //         <img src={dogInfo.imageUrl} className="DogImageProfile"/>
    //         <div className="DogCardContainer">
    //             {/* <img src={dogInfo.imageUrl} className="DogImageProfile"/> */}
    //             <p className="DogCardDetails">Breed: {dogInfo.breed}</p>
    //             <p className="DogCardDetails">Weight: {dogInfo.weight}lbs</p>
    //             <p className="DogCardDetails">Details: {dogInfo.details}</p>
    //         </div>
    //         {user?.email === 'yangjm1287@gmail.com' && <Button variant="contained" size="small" color="secondary" style={{marginBottom:'10px'}} className="DogProfileDelete" onClick={() => deleteOurDog(dogInfo._id!)}>Delete Dog</Button>}

    //     </div>
    // )

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
    <div className="nunito">
      <Card sx={{ boxShadow:4, width: 345, backgroundColor:"white", color:"#7f6534", margin:"2rem", borderRadius:"10px"}} className="nunito ">
        <CardHeader className="DogCardHeader nunito"
          title={dogInfo.name}
          sx={{'& .MuiTypography-root': {fontFamily:"nunito, sans-serif", fontWeight:"1000", textAlign:"center", fontSize:"2.7rem", color:""}}}

        />
        <CardMedia
          component="img"
          height="350rem"
          width="300rem"
          image={dogInfo.imageUrl}
          alt="Puppy Image"
          sx={{borderBottomLeftRadius:"0px", borderBottomRightRadius:"70px", objectFit:"cover" }}
        />
        <CardActions disableSpacing>
          <div>
            <Typography sx={{fontWeight: "800", fontFamily:"nunito", fontSize: "1.5rem", color:"#7f6534"}}>
            {dogInfo.breed.toUpperCase()}
            </Typography>
            {/* <Typography sx={{fontWeight: "600", fontFamily:"nunito", fontSize: "1rem", color:"#9e7d41"}}>
            {dogInfo.breed}
            </Typography> */}
          </div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{textAlign:"center", display:"flex", flexDirection:"row", justifyContent:"center", marginRight:".5em", alignItems:"center"}}
          >
            <ExpandCircleDownIcon fontSize="large" sx={{display:"flex", color:"#d9d3b0"}}/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{margin: "0"}}>
            <Typography paragraph>
            <span className="LabelPuppy nunito">Weight:</span> <span className="nunito PuppyCardContent">{dogInfo.weight}lbs </span>
            </Typography>
            <Typography paragraph>
            <span className="LabelPuppy nunito">Details:</span> <span className="nunito PuppyCardContent"> {dogInfo.details}</span>
            </Typography>
          </CardContent>
        </Collapse>
        {user?.email === 'yangjm1287@gmail.com' && 
        <Button variant="contained" size="small"  
          sx={{backgroundColor:"#c9b694", color:"white", margin:"1rem 6rem", height:"2.5rem", fontFamily:"nunito, sans-serif", fontWeight:"900", fontSize:".9rem",
              ':hover': {backgroundColor:'#9e7d41', color:"white"}}} 
          
          onClick={() => deleteOurDog(dogInfo._id!)}
          > Edit Dog</Button>}
      </Card>
    </div>
    )
}