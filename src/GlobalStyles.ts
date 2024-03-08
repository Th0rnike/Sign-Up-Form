import { createGlobalStyle } from "styled-components";
import { styles } from "./assets/colors";
import mobileBackground from "./assets/images/bg-intro-mobile.png";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    body{
        background-color: ${styles.colors.mainBackground};
        background-image: url(${mobileBackground});
        padding: 88px 24px 68px 24px;
    }
`;

export default GlobalStyles;
