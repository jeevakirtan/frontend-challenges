import styled, { ThemeProvider } from "styled-components";
import BannerImage from "../components/BannerImage";
import { theme } from "../config/theme";
import { RecipeMetaData } from "../components/RecipeMetaData";
import { Ingredients } from "../components/Ingredients";
import { Instructions } from "../components/Instructions";
import { Nutrition } from "../components/Nutrition";

const Main = styled.main`
    width: 48%;
    background-color: #fff;
    margin: 4rem auto;
    padding: 4rem;
    border-radius: 20px;


    @media screen and (max-width: 768px){
        margin: 1rem auto;
        padding: 1rem 3rem;
        width: 80%;
        border-radius: 0;
    }

    @media screen and (max-width: 480px){
        box-sizing: border-box;
        margin: 0;
        padding: 1rem 2rem;
        width: 100%;
        border-radius: 0;
    }

`;

const Headline = styled.h1`
    font-size: 6rem;
    font-family: young-serif;
    font-weight: 400;
    @media screen and (max-width: 480px){
        font-size: 4rem;
    }
`
const Description = styled.p`
    font-size: 2.2rem;
    font-family: 'outfit';
    color: ${(props) => props.theme.colors.wengeBrown};
`

function RecipePage() {
    return <ThemeProvider theme={theme}>
        <Main>
            <BannerImage />
            <Headline>Simple Omlette Recipe</Headline>
            <Description>
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </Description>
            <RecipeMetaData />
            <Ingredients />
            <Instructions />
            <Nutrition />
        </Main>
    </ThemeProvider>
}

export default RecipePage;