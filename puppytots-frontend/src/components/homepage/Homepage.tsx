import { Link } from "react-router-dom";
import '../../styles/homepage.css'
import { NavBar } from "../navBar/NavBar";
import { useAuth } from "../../hooks/useAuth";
import { Button, Container, FormControl } from "@mui/material";
import  Carousel  from "./Carousel";

export function HomePage(){
    
    let images:string[] = [
        'images/carosel/girlPuppyPic.png', 
        'images/carosel/girlPuppy2.png',
        'images/carosel/girlPuppy3.png',
        'images/carosel/girlPuppy4.png',
        'images/carosel/boyPuppy1.png',
        'images/carosel/boyPuppy2.png',
        'images/carosel/boyPuppy3.png',
        'images/carosel/boyPuppy4.png',
        'images/carosel/boyPuppy5.png',

    ]

    return(
        <div className="HomePage">
            <NavBar/>
            <div className="HomePageMain ">
                <div className="HomePageLeft">
                    <h1 className="nunito homePageWelcome">Welcome to <span className="puppyTotsHighlight">Puppytots</span></h1>
                    <h4 className="nunito HomePageSpan"><img className="HomeSpanIcon" src="/images/icons8-dog-48.png"/>Bringing joy one wag at a time  </h4>

                </div>
                <div className="HomePageRight ">
                    <img className="homePagePicture" src="images/malePuppyPic.png" alt="picture of dog"/>
                </div>
            </div>
            <div>
                <h3 className="nunito HomepagePastPuppies"> See some of our past <span className="PuppytotsColor PuppytotsCarouselSpan">Puppytots</span></h3>
                <Carousel images={images}/>
            </div>
            
        </div>
    )
}


