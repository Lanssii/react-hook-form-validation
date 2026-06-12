import { useForm } from "react-hook-form";
import "./Form.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const nameValue = watch("name");
  const usernameValue = watch("username");
  const emailValue = watch("email");
  const phoneValue = watch("phone");

  return (
    <div className="form-container">
      <h1>აგენტის დამატება</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="field">
            <input type="text" placeholder="სახელი" {...register("name")} />
          </div>

          <div className="field">
            <input type="text" placeholder="გვარი" {...register("username")} />
          </div>
        </div>

        <div className="form-group">
          <div className="field">
            <input type="email" placeholder="ელ-ფოსტა" {...register("email")} />
          </div>

          <div className="field">
            <input
              type="text"
              placeholder="ტელეფონის ნომერი"
              {...register("phone")}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
