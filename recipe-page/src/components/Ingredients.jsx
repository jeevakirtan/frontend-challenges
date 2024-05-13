import styled from "styled-components"
import { SectionTitle } from "./SectionTitle"

const Item = styled.li`
    padding-left: 1rem;
    padding-bottom: 1.5rem;
    color: hsl(30, 10%, 34%);
    &::marker{
        color: #844731;
    }
`

export const Ingredients = () => {
    return <section>
        <SectionTitle>Ingredients</SectionTitle>
        <ul>
            <Item>2-3 large eggs</Item>
            <Item>Salt, to taste</Item>
            <Item>Pepper, to taste</Item>
            <Item>1 tablespoon of butter or oil</Item>
            <Item>Optional fillings: cheese, diced vegetables, cooked meats, herbs</Item>
        </ul> 
    </section>
}
