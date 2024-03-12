import styled from "styled-components";
import { styles } from "../assets/colors";

const Title = styled.div`
  text-align: center;
  color: ${styles.colors.textWhite};

  @media screen and (min-width: 1000px) {
    width: 47%;
    text-align: left;
  }
`;

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.29px;
  margin-bottom: 16px;

  @media screen and (min-width: 1000px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.5px;
  }
`;

const PText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;

const TitleComponent = () => {
  return (
    <Title>
      <H1>Learn to code by watching others</H1>
      <PText>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </PText>
    </Title>
  );
};

export default TitleComponent;
