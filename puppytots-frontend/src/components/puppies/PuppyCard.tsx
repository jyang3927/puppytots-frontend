import { Button, Typography } from "@mui/material";
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

    // let {deletePuppyProfile} = usePuppy(); 
    // let {user} = useAuth(); 

    
    // let availablePuppy = () => {
    //     let setAvailable = "AVAILABLE";
    //     if(puppy.available === false){
    //         setAvailable = "I have found my family!"; 
    //         return setAvailable;
    //     }
    //     return setAvailable;
    // }

    // return(
    //     <div className="PuppyCard">

            {/* <div className="PuppyProfile">
                <img src={puppy.imageName} className="PuppyImageProfile"/>
                <div className="PuppyDetailsContainer sniglet-regular">
                    {/* <img src={puppy.imageName} className="PuppyImageProfile"/> */}
                    {/* <div className="PuppyDetails"><span className="PuppyDetailsLabel">Sex: </span>{puppy.sex}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Mother: </span>{puppy.motherName}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Father: </span>{puppy.fatherName}</div>
                    <div className="PuppyDetails"><span className="PuppyDetailsLabel">Price: </span>${puppy.price}</div>
                    <span className="PuppyDetailsLabel">{availablePuppy()}</span>
                </div>
                {user?.email === 'yangjm1287@gmail.com' && <Button variant="contained" size="small" color="secondary" style={{marginBottom:'10px'}} className="PuppyProfileDelete" onClick={() => deletePuppyProfile(puppy._id!)}>Delete Puppy</Button>}
            </div> */} 
        // </div>
    // )

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
    <div className="nunito">
      <Card sx={{ maxWidth: 345, backgroundColor:"#CFC2AC", color:"white", marginTop:"3rem"}} className="nunito">
        <CardHeader
        //   avatar={
        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //       R
        //     </Avatar>
        //   }
          title={puppy.sex}
          subheader={puppy.breed.toUpperCase()}
          sx={{fontFamily:"nunito,sans-serif"}}
        />
        <CardMedia
          component="img"
          height="400rem"
          image={puppy.imageName}
          alt="Puppy Image"
        />
        <CardContent>
          <Typography variant="body2" color="text" sx={{fontSize:"1.3rem", fontWeight:"1000", padding:"1rem"}}>
            Click for more details!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Mom: {puppy.motherName}
            </Typography>
            <Typography paragraph>
              Father: {puppy.fatherName}
            </Typography>
            <Typography>
              Birthdate: {puppy.birth.toString()}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
    )
}