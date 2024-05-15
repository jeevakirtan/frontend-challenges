import { styled } from "styled-components";

const CardContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 30px;
    border-top: 3px solid ${({ $color }) => $color};
    grid-area: ${({$gridArea}) => $gridArea};
`

const CardHeader = styled.h2`
    font-size: 20px;
`

const CardDescription = styled.p``

const CardImage = styled.img`
    display: block;
    max-width: 50px;
    margin-left: auto;
`

function GridCard({title, description, img, color, gridArea}) {
    return (
        <CardContainer $color={color} $gridArea={gridArea}>
            <CardHeader>{title}</CardHeader>
            <CardDescription>{description}</CardDescription>
            <CardImage src={img} alt="card image"/>
        </CardContainer>
    );
}

export default GridCard;