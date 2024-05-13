import styled from "styled-components"
import { SectionTitle } from "./SectionTitle"

const Section = styled.section`
    color: hsl(30, 10%, 34%);
    table {
        width: 100%;
        border-collapse: collapse;
    } 
    td {
        padding: 2rem;
    }
    tr td:last-child {
        font-weight: bold;
        color: #844731;
    }
    table tr:not(:last-child) {
     border-bottom: 1px solid ${(props)=> props.theme.colors.lightGrey}; /* Adjust border style and color as needed */
    }
`

export const Nutrition = () => (
    <Section>
        <SectionTitle>Nutrition</SectionTitle>
        <p>The table below shows nutritional values per serving without additional fillings.</p>
        <table>
            <tr>
                <td>Calories</td>
                <td>277kcal</td>
            </tr>
            <tr>
                <td>Carbs</td>
                <td>0g</td>
            </tr>
            <tr>
                <td>Protein</td>
                <td>20g</td>
            </tr>
            <tr>
                <td>Fat</td>
                <td>22g</td>
            </tr>
        </table>
    </Section>
)