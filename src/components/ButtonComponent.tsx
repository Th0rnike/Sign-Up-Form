import styled from "styled-components";
import { styles } from "../assets/colors";

const Button = styled.button`
  color: ${styles.colors.textWhite};
  background-color: ${styles.colors.buttonColor};
  border: none;
  border-radius: 8px;
  width: 100%;
  padding: 15px 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0px;
  box-shadow: 0 4px 0 0 rgba(49, 181, 123, 0.9);
  letter-spacing: 1px;
`;

interface ButtonProps {
  isSubmitting: boolean;
}

export default function ButtonComponent({ isSubmitting }: ButtonProps) {
  return (
    <Button type="submit">
      {isSubmitting ? "Submitting..." : "CLAIM YOUR FREE TRIAL"}
    </Button>
  );
}
