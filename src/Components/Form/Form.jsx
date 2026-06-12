import { useForm } from "react-hook-form";
import "./Form.css";

function Form() {
  const { register, handleSubmit, formState = { errors } } = useForm();

  return (
    <div className="form-container">
      <h1>აგენტის დამატება</h1>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="სახელი" />
          <input type="text" placeholder="გვარი" />
        </div>

        <div className="form-group">
          <input type="email" placeholder="ელ-ფოსტა" />
          <input type="text" placeholder="ტელეფონის ნომერი" />
        </div>
      </form>
    </div>
  );
}

export default Form;
