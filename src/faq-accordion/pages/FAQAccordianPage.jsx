import { styled } from "styled-components";
import FAQCard from "../components/FAQCard";
import { FAQGlobalStyles } from "./style";

const backgroundImg = window.innerWidth <= 480 ?
    "/faq/images/background-pattern-desktop.svg" :
    "/faq/images/background-pattern-mobile.svg";

const Page = styled.main`
    width: 100%;
    height: 100%;
    padding: 1px;
    background-color: #f9eeff;
    background-image: url(${({$bgImage})=>$bgImage});
    background-position: top;
    background-repeat: repeat-x;
    overflow: auto;
`

function FAQAccordianPage() {
    return (
        <>
            <FAQGlobalStyles />
            <Page $bgImage={backgroundImg}>
                <FAQCard />
            </Page>
        </>
    );
}

export default FAQAccordianPage;