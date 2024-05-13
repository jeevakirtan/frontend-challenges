import { createGlobalStyle } from "styled-components"
import outfitFont from "../assets/fonts/outfit/Outfit-VariableFont_wght.ttf";
import youngSerif from "../assets/fonts/young-serif/YoungSerif-Regular.ttf"

const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: "outfit";
    src: url(${outfitFont}) format('truetype');
}
@font-face {
    font-family: "young-serif";
    src: url(${youngSerif}) format('truetype');
}
`

export default GlobalFonts;