import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import TitleComponent from "./components/TitleComponent";
import Ad from "./components/Ad";
import FormComponent from "./components/FormComponent";

const MainDiv = styled.div`
  margin-top: 64px;
  @media screen and (min-width: 1000px) {
    width: 48%;
  }
`;

const FlexDiv = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 45px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <FlexDiv>
        <TitleComponent />
        <MainDiv>
          <Ad />
          <FormComponent />
        </MainDiv>
      </FlexDiv>
    </>
  );
}

export default App;
