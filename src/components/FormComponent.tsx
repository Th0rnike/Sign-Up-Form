import styled from "styled-components";
import { styles } from "../assets/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import ButtonComponent from "./ButtonComponent";

const Form = styled.form`
  background-color: ${styles.colors.textWhite};
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 1000px) {
    padding: 40px;
  }
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

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log(data);
    reset();
  };

  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
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
              if (!validateEmail(value)) {
                return "Looks like this is not an email";
              } else {
                return true;
              }
            },
          })}
          type="text"
          placeholder="Email Address"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
      <ButtonComponent isSubmitting={isSubmitting} />
      <BottomText>
        By clicking the button, you are agreeing to our{" "}
        <Terms>Terms and Services</Terms>
      </BottomText>
    </Form>
  );
};

export default FormComponent;
