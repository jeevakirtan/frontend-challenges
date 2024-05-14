import styled from "styled-components";
import PropTypes from "prop-types"

const Title = styled.h3`
    font-size: 2.2rem;
    font-family: young-serif;
    color: #844731;
`

export const SectionTitle = ({children}) => {
    return <Title>
    {children}
</Title>
}

SectionTitle.propTypes = {
    children: PropTypes.string
}