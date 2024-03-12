import styled from "styled-components";
import { styles } from "../assets/colors";

const Offer = styled.div`
  background-color: ${styles.colors.offerBackground};
  color: ${styles.colors.textWhite};
  text-align: center;
  border-radius: 8px;
  padding: 18px 66px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
`;

const OfferText = styled.h3`
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.26px;
`;

const OfferBold = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.26px;
`;

const Ad = () => {
  return (
    <Offer>
      <OfferText>
        <OfferBold>Try it free 7 days</OfferBold> then $20/mo. thereafter
      </OfferText>
    </Offer>
  );
};

export default Ad;
