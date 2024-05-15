import { styled } from "styled-components"

const plusSign = "/faq/images/icon-plus.svg"
const minusSign = "/faq/images/icon-minus.svg"

const AccordionContainer = styled.div`
    padding: 20px 0;
    &:not(:last-child){
        border-bottom: 1px solid #eeeeee;
    }
`
const AccordionHeader = styled.div`
    display: flex;
    align-items: flex-start;
    cursor: pointer;    
    outline: none;

    &:focus h2{
        color: #ad28eb;
    }
`
const Question = styled.h2`
    color: hsl(292, 42%, 14%);
    margin: 0;
    flex-grow: 1;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`
const Icon = styled.i`
    min-width: 28px;
    height: 28px;
    background-image: url(${({$path}) => $path});
    background-repeat: no-repeat;
    background-position: center;
`
const AccordionDescription = styled.p`
    color: #918192;
`

function Accordion({ isOpen, handleClick, id, question, description}) {
    return (<AccordionContainer>
        <AccordionHeader
            onClick={() => handleClick(id, isOpen)}
            tabIndex={0}
            onKeyDown={(event) => event.key === "Enter" && handleClick(id, isOpen)}
        >
            <Question>{question}</Question>
            <Icon $path={isOpen ? minusSign : plusSign} />
        </AccordionHeader>
        {isOpen && <AccordionDescription>
            {description}
        </AccordionDescription>}
    </AccordionContainer>);
}

export default Accordion;