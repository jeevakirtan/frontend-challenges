import styled from "styled-components"
import { SectionTitle } from "./SectionTitle"

const Section = styled.section`
border-top: 1px solid ${(props)=> props.theme.colors.lightGrey};
border-bottom: 1px solid ${(props)=> props.theme.colors.lightGrey};

li {
    padding-left: 1rem;
    padding-bottom: 1rem;
    word-spacing: 0.3rem;
    line-height: 2rem;
    color: hsl(30, 10%, 34%);
}

li::marker{
    color: #844731;
}
strong {
    margin-right: 0.5rem;
}

`

export const Instructions = () => (
    <Section>
        <SectionTitle>Instructions</SectionTitle>
        <ol>
            <li>
                <strong>Beat the eggs: </strong>
                <span>
                    In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                </span>
            </li>
            <li>
                <strong>Heat the pan: </strong>
                <span>
                    Place a non-stick frying pan over medium heat and add butter or oil.
                </span>
            </li>
            <li>
                <strong>Cook the omelette: </strong>
                <span>
                    Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                </span>
            </li>
            <li>
                <strong>Add fillings(optional): </strong>
                <span>
                    When the eggs begin to set at the edges but are still slightly runny in the middle sprinkle your chosen fillings over one half of the omelette.
                </span>
            </li>
            <li>
                <strong>Fold and serve: </strong>
                <span>
                    As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                </span>
            </li>
            <li>
                <strong>Enjoy: </strong>
                <span>
                   Serve hot, with additonal salt and pepper if needed.
                </span>
            </li>
        </ol>
    </Section>
)