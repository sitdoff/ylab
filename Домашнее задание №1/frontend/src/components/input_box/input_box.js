import "./css/style.css";

function InputBox(props) {
  return (
    <div className="input-box">
      <input type={props.type} name={props.name} placeholder={props.placeholder} required />
    </div>
  );
}

export default InputBox;
