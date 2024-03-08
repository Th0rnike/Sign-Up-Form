import { useForm, SubmitHandler } from "react-hook-form";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { styles } from "./assets/colors";
import { mainSheet } from "styled-components/dist/models/StyleSheetManager";

const Title = styled.div`
  text-align: center;
  color: ${styles.colors.textWhite};
`;

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.29px;
  margin-bottom: 16px;
`;

const PText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;

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

const MainDiv = styled.div`
  margin-top: 64px;
`;

const Form = styled.form`
  background-color: ${styles.colors.textWhite};
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
`;

const Input = styled.input`
  padding: 15px 0 15px 19px;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
  margin-bottom: 16px;
  width: 100%;
  border: 1px solid ${styles.colors.inputBorder};
  border-radius: 5px;
`;

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

const BottomText = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 21px;
  color: ${styles.colors.footerText};
  text-align: center;
  margin-top: 8px;
`;

const Terms = styled.span`
  font-weight: 700;
  color: ${styles.colors.mainBackground};
`;

interface FormProps {
  firtsName: string;
  lastName: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log(data);
  };

  return (
    <>
      <GlobalStyles />
      <Title>
        <H1>Learn to code by watching others</H1>
        <PText>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </PText>
      </Title>
      <MainDiv>
        <Offer>
          <OfferText>
            <OfferBold>Try it free 7 days</OfferBold> then $20/mo. thereafter
          </OfferText>
        </Offer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("firtsName", { required: true })}
            type="text"
            placeholder="First Name"
          />
          {errors.firtsName && <p>First Name can not be empty</p>}
          <Input
            {...register("lastName", { required: true })}
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && <p>Last Name cannot be empty</p>}
          <Input
            {...register("email", {
              required: "Email can not be empty",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                } else {
                  return true;
                }
              },
            })}
            type="text"
            placeholder="Email Address"
          />
          {errors.email?.message}
          <Input
            {...register("password", {
              required: "Password can not be empty",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password?.message}
          <Button type="submit">
            {isSubmitting ? "Submitting..." : "CLAIM YOUR FREE TRIAL"}
          </Button>
          <BottomText>
            By clicking the button, you are agreeing to our{" "}
            <Terms>Terms and Services</Terms>
          </BottomText>
        </Form>
      </MainDiv>
    </>
  );
}

export default App;
