function Button(props) {
    /* Компонент кнопки */

    return (
        <button type={props.type} className="btn" onClick={props.onClick} disabled={props.disabled}>
            {props.sign}
        </button>
    );
}

export default Button;
