import "./css/style.css";

function Button(props) {
  return (
    <button type={props.type} className="btn">
      {props.sign}
    </button>
  );
}

export default Button;
