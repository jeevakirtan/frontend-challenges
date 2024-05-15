import { styled } from "styled-components";
import Accordion from "./Accordion";
import { useState } from "react";

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 30%;
    margin: 10% auto 0 auto;
    padding: 10px 30px;

    @media screen and (max-width: 768px){
        width: 70%;
    }

    @media screen and (max-width: 480px){
        width: 90%;
        font-size: 16px;
    }
`
const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const CardTitle = styled.h1`
    font-size: 46px;
`
const StarIcon = styled.div`
    background-image: url("/faq/images/icon-star.svg");
    width: 40px;
    height: 40px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-right:20px;
`
const CardBody = styled.div`
    margin-top: 10px;
`

function FAQCard() {
    const [openedAccordionList, setOpenedAccordionToList] = useState([]);

    const handleClick = (id, isAlreadyOpened) => {
        if (isAlreadyOpened) {
            setOpenedAccordionToList(openedAccordionList.filter(aId => aId !== id));
        } else {
            setOpenedAccordionToList([...openedAccordionList, id]);
        }
    }

    const accordionList = [
        {
            id: 1,
            question: "What is Frontend Mentor, and how will it help me?",
            description: `Frontend Mentor offers realistic coding challenges to help developers improve their 
            frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
            all levels and ideal for portfolio building.`
        },
        {
            id: 2,
            question: "Is Frontend Mentor free?",
            description: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
            option providing access to a range of projects suitable for all skill levels.`
        },
        {
            id: 3,
            question: "Can I use Frontend Mentor projects in my portfolio?",
            description: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!
          `
        },
        {
            id: 4,
            question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            description: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
            channel where you can ask questions and seek support from other community members.
          `
        }
    ]

    return <CardContainer>
        <CardHeader>
            <StarIcon />
            <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardBody>
            {
                accordionList.map(accordion => <Accordion
                    isOpen={openedAccordionList.includes(accordion.id)}
                    key={accordion.id}
                    question={accordion.question}
                    description={accordion.description}
                    id={accordion.id}
                    handleClick={handleClick}
                />)
            }
        </CardBody>
    </CardContainer>
}

export default FAQCard;