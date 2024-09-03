function InputBox(props) {
  return (
    <div className="input-box">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
        required
      />
    </div>
  );
}

export default InputBox;
