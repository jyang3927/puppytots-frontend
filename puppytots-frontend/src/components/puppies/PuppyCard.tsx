import { Typography } from "@mui/material";
import { Puppy } from "../../models/Puppy"
import "../../styles/puppyCard.css"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
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

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    let puppyBirth = new Date(puppy.birth).toLocaleDateString();

    return (
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
        <CardActions disableSpacing>
          <div>
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
      </Card>
    </div>
    )
}