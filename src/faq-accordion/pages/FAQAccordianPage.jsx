import { styled } from "styled-components";
import backgroundImgDesktop from "../assets/images/background-pattern-desktop.svg"
import backgroundImgMobile from "../assets/images/background-pattern-mobile.svg"
import FAQCard from "../components/FAQCard";
import { FAQGlobalStyles } from "./style";

const backgroundImg = window.innerWidth <= 480 ? backgroundImgMobile : backgroundImgDesktop;

const Page = styled.main`
    width: 100%;
    height: 100%;
    padding: 1px;
    background-color: #f9eeff;
    background-image: url(${backgroundImg});
    background-position: top;
    background-repeat: repeat-x;
    overflow: auto;
`

function FAQAccordianPage() {
    return (
        <>
            <FAQGlobalStyles />
            <Page>
                <FAQCard />
            </Page>
        </>
    );
}

export default FAQAccordianPage;