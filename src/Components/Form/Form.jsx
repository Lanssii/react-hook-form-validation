import { useForm } from "react-hook-form";
import "./Form.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const nameValue = watch("name");
  const usernameValue = watch("username");
  const emailValue = watch("email");
  const phoneValue = watch("phone");

  const handleClear = () => {
    reset();
  };

  return (
    <div className="form-container">
      <h1>აგენტის დამატება</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="field">
            <input
              type="text"
              placeholder="სახელი"
              {...register("name", {
                required: "სახელი სავალდებულოა",
              })}
            />
          </div>

          <div className="field">
            <input
              type="text"
              placeholder="გვარი"
              {...register("username", { required: "გვარი სავალდებულოა" })}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="field">
            <input
              type="email"
              placeholder="ელ-ფოსტა"
              {...register("email", { required: "ელ-ფოსტა დავალდებულოა" })}
            />
          </div>

          <div className="field">
            <input
              type="text"
              placeholder="ტელეფონის ნომერი"
              {...register("phone", {
                required: "ტელეფონის ნომერი სავალდებულოა",
              })}
            />
          </div>
        </div>

        <div className="buttons">
          <button className="cancel-btn" type="button" onClick={handleClear}>
            გაუქმება
          </button>
          <button type="submit" className="add-btn">
            დაამატე აგენტი
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
