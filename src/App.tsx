import { useForm, SubmitHandler } from "react-hook-form";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { styles } from "./assets/colors";

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
  width: 100%;
  border: 1px solid ${styles.colors.inputBorder};
  border-radius: 5px;
  outline: none;
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

const ErrorMessage = styled.p`
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
  line-height: 17px;
  text-align: right;
  color: ${styles.colors.mainBackground};
  margin-top: 6px;
`;

const InputBlock = styled.div`
  margin-bottom: 16px;
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
          <InputBlock>
            <Input
              {...register("firtsName", { required: true })}
              type="text"
              placeholder="First Name"
            />
            {errors.firtsName && (
              <ErrorMessage>First Name can not be empty</ErrorMessage>
            )}
          </InputBlock>
          <InputBlock>
            <Input
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <ErrorMessage>Last Name cannot be empty</ErrorMessage>
            )}
          </InputBlock>
          <InputBlock>
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
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputBlock>
          <InputBlock>
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
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputBlock>
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
