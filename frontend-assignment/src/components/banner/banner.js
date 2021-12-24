import './banner.css';
import { useNavigate } from "react-router-dom";
import BannerBtn from '../button/bannerBtn';

function Banner(props){
    const navigate = useNavigate();
    return(
        <div class='banner-container' style={{flexDirection: props.index % 2===0 && 'row-reverse'}}>
            
            <div class='banner-details'>
                <div>{props.type}</div><br></br>
                <div>{props.desc}</div>
                <br></br>
                <div></div>
                
                   <div onClick={() => navigate(`products/${props.id}`)}> <BannerBtn btnName={"explore "+props.type}/></div>
                
            </div>

            <div class='banner-img'>
                <img src={props.img} alt="shopping item logo" width='350px' height='100%'/>
            </div>
        </div>
        
    )
}

export default Banner;