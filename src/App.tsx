import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

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
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <div>
        <div>
          <h3>Try it free 7 days then $20/mo. thereafter</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firtsName", { required: true })}
            type="text"
            placeholder="First Name"
          />
          {errors.firtsName && <p>First Name can not be empty</p>}
          <input
            {...register("lastName", { required: true })}
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && <p>Last Name cannot be empty</p>}
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>Password cannot be empty</p>}
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our Terms and Services
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
