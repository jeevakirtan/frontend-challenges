import { styled } from "styled-components";
import calculatorIcon from "./images/icon-calculator.svg"
import karmaIcon from "./images/icon-karma.svg"
import supervisorIcon from "./images/icon-supervisor.svg"
import teamBuilderIcon from "./images/icon-team-builder.svg"
import "./style.css"
import GridCard from "./components/GridCard";

const Container = styled.main`
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        margin-top: 30px;
    }

    @media screen and (max-width: 480px) {
        padding: 10px 15px;
        margin-top: 0;
        
        h1 {
            font-size: 30px;
        }
    }
`
const Title = styled.h1`
    text-align: center;
    font-size: 36px;
    color: ${({ $color }) => $color || ""};
    font-family: 'Poppins';
    font-weight: 200;

    &:first-child{
        margin-bottom: -20px;
    }
`
const Description = styled.p`
    max-width: 480px;
    color: hsl(229, 6%, 66%);
    text-align: center;
    margin: 0 auto;
    font-family: 'Poppins';
`

const GridContainer = styled.div`
    display: grid;
    width: 60%;
    margin: 40px auto 0;
    padding-top: 30px;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: ". teambuilder ."
                        "supervisor teambuilder  calculator"
                        "supervisor karma calculator"
                        ". karma ."
    ;

    @media screen and (max-width: 768px) {
        width: 99%;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-template-areas: "teambuilder" "supervisor" "calculator" "karma";
    }
`
function FourCardFeaturePage() {

    const cardList = [
        {
            title: "Supervisor",
            description: "Monitors activity to identify project roadblocks",
            imgPath: supervisorIcon,
            color: "hsl(0, 78%, 62%)",
            gridArea: 'supervisor'
        },
        {
            title: "Team Builder",
            description: "Scans our talent network to create the optimal team for your project",
            imgPath: teamBuilderIcon,
            color: "hsl(180, 62%, 55%)",
            gridArea: 'teambuilder'
        },
        {
            title: "Karma",
            description: "Regularly evaluates our talent to ensure quality",
            imgPath: karmaIcon,
            color: "hsl(212, 86%, 64%)",
            gridArea: 'karma'
        },
        {
            title: "Calculator",
            description: "Uses data from past projects to provide better delivery estimates",
            imgPath: calculatorIcon,
            color: "hsl(34, 97%, 64%)",
            gridArea: 'calculator'
        }
    ]
    return (
        <Container>
            <Title $color={"hsl(229, 6%, 66%)"}>
                Reliable, efficient delivery
            </Title>
            <Title $color={"hsl(234, 12%, 34%)"}>
                Powered by Technology
            </Title>
            <Description>
            Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful
            </Description>
            <GridContainer>
                {
                    cardList.map(card => <GridCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        color={card.color}
                        img={card.imgPath}
                        gridArea={card.gridArea}
                    />)
                }
            </GridContainer>
        </Container>
    );
}

export default FourCardFeaturePage;