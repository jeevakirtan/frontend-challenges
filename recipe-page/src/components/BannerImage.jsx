import styled from "styled-components";
import bannerImage from "../assets/images/image-omelette.jpeg"
const Image = styled.img`
    max-width: 100%;
    border-radius: 20px;
`

function BannerImage() {
    return <Image src={ bannerImage } alt="banner image"/>
}


export default BannerImage;