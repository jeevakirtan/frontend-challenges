import styled from "styled-components"

const Section = styled.section`
padding: 1rem 2rem;
background-color: ${(props) => props.theme.colors.roseWhite};
margin: 2rem auto;
`
const Title = styled.h3`
     color: ${(props)=> props.theme.colors.darkPink};
`
const MetaItem = styled.li`
    line-height: 3rem;
    word-spacing: 0.3rem;
    padding-left: 1rem;

    &::marker{
        color: ${(props)=> props.theme.colors.darkPink};
    }
`

export const RecipeMetaData = () => {
    return <Section>
        <Title>Preparation Time</Title>
        <ul>
            <MetaItem>
                <strong>Total: </strong>
                <span>Approximately 10 minutes</span>
            </MetaItem>
            <MetaItem>
                <strong>Preparation: </strong>
                <span>5 minutes</span>
            </MetaItem>
            <MetaItem>
                <strong>Cooking: </strong>
                <span>5 minutes</span>
            </MetaItem>
        </ul>
    </Section>
}
